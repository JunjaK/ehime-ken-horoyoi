import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ALL_REGIONS, BREWERIES, MATCH_COLOR, VENUE, type Brewery } from '../data/breweries.ts';
import { spreadPoints, type SpreadPoint } from '../lib/spread.ts';

/** 마커끼리 확보할 최소 화면 간격(px). */
const MIN_MARKER_GAP = 34;

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
const emptyEl = required<HTMLElement>('#empty');
const rowEls = Array.from(document.querySelectorAll<HTMLButtonElement>('.row'));
const detailEls = Array.from(document.querySelectorAll<HTMLElement>('.detail'));

const byId = new Map(BREWERIES.map((b) => [b.id, b]));
const markers = new Map<number, L.Marker>();

let hoverId: number | null = null;
let pinId: number | null = null;
let region: string = ALL_REGIONS;

const isVisible = (b: Brewery) => region === ALL_REGIONS || b.region === region;

function markerIcon(b: Brewery, active: boolean) {
  const size = active ? 32 : 25;
  const color = MATCH_COLOR[b.match];
  const html =
    `<div style="width:${size}px;height:${size}px;border-radius:50%;overflow:hidden;` +
    `background:${active ? '#1c1a17' : color};color:#fff;` +
    `font:600 ${active ? 13 : 11.5}px/1 'IBM Plex Mono',monospace;` +
    `display:flex;align-items:center;justify-content:center;` +
    `box-shadow:0 ${active ? '4px 14px rgba(28,26,23,.42)' : '2px 6px rgba(28,26,23,.28)'};` +
    `border:2px solid ${active ? color : '#f7f4ee'};transition:all .14s">${b.id}</div>`;

  return L.divIcon({ html, className: '', iconSize: [size, size], iconAnchor: [size / 2, size / 2] });
}

const map = L.map(mapEl, { zoomControl: true, scrollWheelZoom: true, minZoom: 7, maxZoom: 14 });

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO',
  subdomains: 'abcd',
  maxZoom: 18,
}).addTo(map);

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
      `<div style="width:30px;height:30px;border-radius:50%;background:#1c1a17;border:3px solid #f7f4ee;` +
      `box-shadow:0 3px 10px rgba(28,26,23,.4);display:flex;align-items:center;justify-content:center;` +
      `color:#f7f4ee;font:600 13px/1 'Noto Serif KR',serif">祭</div>`,
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
  const activeId = hoverId ?? pinId;

  let visibleCount = 0;
  for (const row of rowEls) {
    const id = Number(row.dataset.id);
    const shown = region === ALL_REGIONS || row.dataset.region === region;
    row.hidden = !shown;
    row.classList.toggle('is-active', id === activeId);
    if (shown) visibleCount++;
  }
  countEl.textContent = String(visibleCount);

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
  }
}

function pin(id: number) {
  pinId = id;
  hoverId = null;
  const b = byId.get(id);
  if (b) map.flyTo([b.lat, b.lng], Math.max(map.getZoom(), 10), { duration: 0.6 });
  render();
}

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

  // 필터 밖으로 나간 양조장이 상세 패널에 남아 있으면 목록·지도와 어긋난다.
  const survives = (id: number | null) => {
    if (id === null) return false;
    const b = byId.get(id);
    return b !== undefined && isVisible(b);
  };
  if (!survives(hoverId)) hoverId = null;
  if (!survives(pinId)) pinId = null;

  render();
});

map.on('zoomend', () => {
  spreadMarkers();
  render();
});

map.fitBounds(L.latLngBounds(BREWERIES.map((b) => [b.lat, b.lng])).pad(0.14));
spreadMarkers();
render();
