import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ALL_REGIONS, BREWERIES, VENUE, type BrandGuide as Brewery, type MatchRank } from '../data/breweries.ts';
import { matchesQuery, searchText } from '../lib/search.ts';
import { spreadPoints, type SpreadPoint } from '../lib/spread.ts';

/** 마커끼리 확보할 최소 화면 간격(px). */
const MIN_MARKER_GAP = 34;

/**
 * 마커 색의 SSOT 는 global.css 의 @theme 토큰이다.
 * 여기에 값을 복제하면 팔레트를 바꿀 때 지도만 옛 색으로 남는다.
 */
const theme = getComputedStyle(document.documentElement);
const token = (name: string) => theme.getPropertyValue(name).trim();

const MATCH_COLOR: Record<MatchRank, string> = {
  1: token('--color-match-1'),
  2: token('--color-match-2'),
  3: token('--color-match-3'),
};
const BACKGROUND = token('--color-background');
const FOREGROUND = token('--color-foreground');

/** 회장 마커의 가상 id. 실제 브랜드 id(1~19)와 겹치지 않는다. */
const VENUE_ID = 0;

function required<T extends Element>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new Error(`엘리먼트를 찾을 수 없습니다: ${selector}`);
  return el;
}

const mapEl = required<HTMLDivElement>('#map');
const regionEl = required<HTMLSelectElement>('#region');
const countEl = required<HTMLElement>('#count');
const searchEl = required<HTMLInputElement>('#search');
const searchForm = required<HTMLFormElement>('#search-form');
const noResultsEl = required<HTMLElement>('#no-results');
const searchStatusEl = required<HTMLElement>('#search-status');
const mapStatusEl = required<HTMLElement>('#map-status');
const searchIndex = new Map(BREWERIES.map((b) => [b.id, searchText(b)]));
const emptyEl = required<HTMLElement>('#empty');
// 스타일 클래스가 아니라 구조로 잡는다. 클래스는 리디자인 때 갈리고, 셀렉터는 조용히 죽는다.
const rowEls = Array.from(document.querySelectorAll<HTMLButtonElement>('#list button[data-id]'));
const detailEls = Array.from(document.querySelectorAll<HTMLElement>('#details article[data-id]'));

if (rowEls.length === 0 || detailEls.length === 0) {
  throw new Error(`목록/상세 엘리먼트를 못 찾음 (rows=${rowEls.length}, details=${detailEls.length})`);
}

const byId = new Map(BREWERIES.map((b) => [b.id, b]));
const markers = new Map<number, L.Marker>();

let hoverId: number | null = null;
let pinId: number | null = null;
let region: string = ALL_REGIONS;

let searchInput = '';
let appliedQuery = '';
const isVisible = (b: Brewery) => (region === ALL_REGIONS || b.region === region)
  && matchesQuery(searchIndex.get(b.id) ?? '', appliedQuery);

function markerIcon(b: Brewery, active: boolean) {
  const size = active ? 32 : 25;
  const color = MATCH_COLOR[b.match];
  // 밝은 원 위에 어두운 숫자 (흰 글자는 이 명도대에서 대비가 안 나온다).
  const html =
    `<div style="width:${size}px;height:${size}px;border-radius:50%;` +
    `background:${active ? FOREGROUND : color};color:${BACKGROUND};` +
    `font:600 ${active ? 13 : 11.5}px/1 var(--font-sans);font-variant-numeric:tabular-nums;` +
    `display:flex;align-items:center;justify-content:center;` +
    `box-shadow:0 ${active ? '4px 14px' : '2px 6px'} oklch(0 0 0 / 55%);` +
    `border:2px solid ${active ? color : BACKGROUND};transition:all .14s">${b.id}</div>`;

  return L.divIcon({ html, className: '', iconSize: [size, size], iconAnchor: [size / 2, size / 2] });
}

const map = L.map(mapEl, { zoomControl: true, scrollWheelZoom: true, minZoom: 7, maxZoom: 14 });

const mapboxToken = import.meta.env.PUBLIC_MAPBOX_TOKEN?.trim();
if (!mapboxToken?.startsWith('pk.')) {
  mapStatusEl.textContent = '지도를 불러올 수 없습니다. 브랜드 목록과 상세 정보는 이용할 수 있습니다.';
} else {
  const tiles = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/512/{z}/{x}/{y}{r}?access_token=${encodeURIComponent(mapboxToken)}`, {
    attribution: '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> <a href="https://apps.mapbox.com/feedback/">지도 오류 제보</a>',
    tileSize: 512,
    zoomOffset: -1,
    maxZoom: 18,
  });
  let tileFailed = false;
  let loadTimer: ReturnType<typeof setTimeout> | undefined;
  const showError = () => {
    mapStatusEl.hidden = false;
    mapStatusEl.textContent = '배경 지도를 불러오지 못했습니다. 브랜드 목록과 상세 정보는 이용할 수 있습니다.';
  };
  tiles.on('loading', () => {
    clearTimeout(loadTimer);
    tileFailed = false;
    mapStatusEl.hidden = false;
    mapStatusEl.textContent = '지도를 불러오는 중…';
    loadTimer = setTimeout(showError, 12_000);
  });
  tiles.on('tileerror', () => {
    tileFailed = true;
    showError();
  });
  tiles.on('load', () => {
    clearTimeout(loadTimer);
    mapStatusEl.hidden = !tileFailed;
  });
  tiles.addTo(map);
}

for (const b of BREWERIES) {
  const marker = L.marker([b.lat, b.lng], { icon: markerIcon(b, false), riseOnHover: true, keyboard: false })
    .addTo(map)
    .bindTooltip(`${b.ko} · ${b.ja}`, { direction: 'top', offset: [0, -14], opacity: 0.96 });

  marker.on('mouseover', () => {
    hoverId = b.id;
    render();
  });
  marker.on('mouseout', () => {
    hoverId = null;
    render();
  });
  marker.on('click', () => pin(b.id));

  markers.set(b.id, marker);
}

L.marker([VENUE.lat, VENUE.lng], {
  zIndexOffset: -600,
  icon: L.divIcon({
    html:
      `<div style="width:30px;height:30px;border-radius:50%;background:${FOREGROUND};border:3px solid ${BACKGROUND};` +
      `box-shadow:0 3px 10px oklch(0 0 0 / 55%);display:flex;align-items:center;justify-content:center;` +
      `color:${BACKGROUND};font:600 13px/1 var(--font-jp)">祭</div>`,
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  }),
})
  .addTo(map)
  .bindTooltip(`<b>${VENUE.name}</b><br/>${VENUE.addr}<br/>${VENUE.when}`, {
    direction: 'top',
    offset: [0, -16],
    opacity: 0.97,
  });

/** 겹친 마커를 밀어낸다. 매번 원래 좌표에서 다시 계산하므로 줌을 반복해도 누적 오차가 없다. */
function spreadMarkers() {
  const zoom = map.getZoom();
  const points: (SpreadPoint & { id: number })[] = BREWERIES.map((b) => {
    const { x, y } = map.project([b.lat, b.lng], zoom);
    return { id: b.id, x, y };
  });

  const venue = map.project([VENUE.lat, VENUE.lng], zoom);
  points.push({ id: VENUE_ID, x: venue.x, y: venue.y, fixed: true });

  spreadPoints(points, MIN_MARKER_GAP);

  for (const point of points) {
    markers.get(point.id)?.setLatLng(map.unproject([point.x, point.y], zoom));
  }
}

function render() {
  // 클릭 선택은 지도 이동 중 다른 마커의 호버보다 우선한다.
  const activeId = pinId ?? hoverId;

  let visibleCount = 0;
  for (const row of rowEls) {
    const id = Number(row.dataset.id);
    const b = byId.get(id);
    const shown = b !== undefined && isVisible(b);
    row.hidden = !shown;
    row.setAttribute('aria-current', String(id === activeId));
    if (shown) visibleCount++;
  }
  countEl.textContent = String(visibleCount);
  noResultsEl.hidden = visibleCount !== 0;
  searchStatusEl.textContent = appliedQuery ? `「${appliedQuery}」 · ${visibleCount}개 브랜드` : `지역 내 ${visibleCount}개 브랜드 · Enter 또는 검색으로 적용`;

  for (const detail of detailEls) {
    detail.hidden = Number(detail.dataset.id) !== activeId;
  }
  emptyEl.hidden = activeId !== null;

  for (const b of BREWERIES) {
    const marker = markers.get(b.id);
    if (!marker) continue;

    const shown = isVisible(b);
    if (shown && !map.hasLayer(marker)) marker.addTo(map);
    if (!shown && map.hasLayer(marker)) marker.remove();
    if (!shown) continue;

    marker.setIcon(markerIcon(b, b.id === activeId));
    marker.setZIndexOffset(b.id === activeId ? 1200 : 0);
    marker.getElement()?.setAttribute('data-testid', `guide-marker-select-${b.id}`);
  }
}

/** 같은 항목을 다시 누르면 선택이 풀린다 (호버가 없는 터치에서 유일한 취소 수단). */
function pin(id: number) {
  const alreadyPinned = pinId === id;
  pinId = alreadyPinned ? null : id;
  // 터치에서 한 번 발생하고 끝나는 mouseover 가 남아 있으면 취소가 먹지 않는다.
  hoverId = null;

  const b = byId.get(id);
  if (!alreadyPinned && b) map.flyTo([b.lat, b.lng], Math.max(map.getZoom(), 10), { duration: 0.6 });
  render();
}

function clearSelection() {
  pinId = null;
  hoverId = null;
  render();
}

for (const button of document.querySelectorAll<HTMLButtonElement>('[data-clear]')) {
  button.addEventListener('click', clearSelection);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') clearSelection();
});

for (const row of rowEls) {
  const id = Number(row.dataset.id);
  row.addEventListener('mouseenter', () => {
    hoverId = id;
    render();
  });
  row.addEventListener('mouseleave', () => {
    hoverId = null;
    render();
  });
  // 키보드 사용자에게는 포커스가 마우스오버 역할을 한다.
  row.addEventListener('focus', () => {
    hoverId = id;
    render();
  });
  row.addEventListener('blur', () => {
    hoverId = null;
    render();
  });
  row.addEventListener('click', () => pin(id));
}

regionEl.addEventListener('change', () => {
  region = regionEl.value;
  applyFilters();
});

function applyFilters() {
  // 필터 밖으로 나간 양조장이 상세 패널에 남아 있으면 목록·지도와 어긋난다.
  const survives = (id: number | null) => {
    if (id === null) return false;
    const b = byId.get(id);
    return b !== undefined && isVisible(b);
  };
  if (!survives(hoverId)) hoverId = null;
  if (!survives(pinId)) pinId = null;

  render();
}

searchEl.addEventListener('input', () => { searchInput = searchEl.value; });
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  searchInput = searchEl.value;
  appliedQuery = searchInput.trim();
  applyFilters();
});
searchForm.addEventListener('reset', (event) => {
  event.preventDefault();
  searchInput = '';
  appliedQuery = '';
  searchEl.value = '';
  applyFilters();
});

map.on('zoomend', () => {
  spreadMarkers();
  render();
});

map.fitBounds(L.latLngBounds(BREWERIES.map((b) => [b.lat, b.lng])).pad(0.14));
spreadMarkers();
render();

for (const [selector, testId, label] of [
  ['.leaflet-control-zoom-in', 'guide-map-zoom-in', '지도 확대'],
  ['.leaflet-control-zoom-out', 'guide-map-zoom-out', '지도 축소'],
]) {
  const control = mapEl.querySelector<HTMLElement>(selector);
  control?.setAttribute('data-testid', testId);
  control?.setAttribute('aria-label', label);
}
