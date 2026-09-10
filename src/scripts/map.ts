import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ALL_REGIONS, BREWERIES, VENUE, type BrandGuide, type MatchRank } from '../data/breweries.ts';
import { getLocale, onLocaleChange, uiText } from '../i18n/runtime.ts';
import { matchesQuery, searchText } from '../lib/search.ts';
import { spreadPoints, type SpreadPoint } from '../lib/spread.ts';
import { DEFAULT_TASTE_POINT, profileFromPoint, rankedProfiles, tasteTier, type TasteLevel, type TastePoint } from '../lib/taste-ranking.ts';

const MIN_MARKER_GAP = 34;
const theme = getComputedStyle(document.documentElement);
const token = (name: string) => theme.getPropertyValue(name).trim();
const MATCH_COLOR: Record<MatchRank, string> = {
  1: token('--color-match-1'),
  2: token('--color-match-2'),
  3: token('--color-match-3'),
};
const VENUE_ID = 0;

function required<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing element: ${selector}`);
  return element;
}

const mapEl = required<HTMLDivElement>('#map');
const regionEl = required<HTMLSelectElement>('#region');
const countEl = required<HTMLElement>('#count');
const searchEl = required<HTMLInputElement>('#search');
const searchForm = required<HTMLFormElement>('#search-form');
const noResultsEl = required<HTMLElement>('#no-results');
const searchStatusEl = required<HTMLElement>('#search-status');
const mapStatusEl = required<HTMLElement>('#map-status');
const emptyEl = required<HTMLElement>('#empty');
const listEl = required<HTMLElement>('#list');
const tasteSummaryEl = required<HTMLElement>('#taste-summary');
const tasteResetEl = required<HTMLButtonElement>('#taste-reset');
const tasteCellEls = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-taste-row][data-taste-column]'));
const rowEls = Array.from(document.querySelectorAll<HTMLButtonElement>('#list button[data-id]'));
const detailEls = Array.from(document.querySelectorAll<HTMLElement>('#details article[data-id]'));
if (rowEls.length === 0 || detailEls.length === 0) throw new Error('Brand list or detail panels are missing');

const byId = new Map(BREWERIES.map((brewery) => [brewery.id, brewery]));
const searchIndex = new Map(BREWERIES.map((brewery) => [brewery.id, searchText(brewery)]));
const markers = new Map<number, mapboxgl.Marker>();
const markerElements = new Map<number, HTMLButtonElement>();
let hoverId: number | null = null;
let pinId: number | null = null;
let region: string = ALL_REGIONS;
let searchInput = '';
let appliedQuery = '';
let mapReady = false;

function tasteLevel(value: string | null, fallback: TasteLevel): TasteLevel {
  const parsed = Number(value);
  if (parsed === 1 || parsed === 2 || parsed === 3 || parsed === 4 || parsed === 5) return parsed;
  return fallback;
}

let tastePoint: TastePoint = {
  row: tasteLevel(localStorage.getItem('ehime-taste-row'), DEFAULT_TASTE_POINT.row),
  column: tasteLevel(localStorage.getItem('ehime-taste-column'), DEFAULT_TASTE_POINT.column),
};

const isVisible = (brewery: BrandGuide) =>
  (region === ALL_REGIONS || brewery.region === region) &&
  matchesQuery(searchIndex.get(brewery.id) ?? '', appliedQuery);

function markerElement(brewery: BrandGuide) {
  const element = document.createElement('button');
  element.type = 'button';
  element.className = 'mapbox-brand-marker';
  element.textContent = String(brewery.id);
  element.dataset.testid = `guide-marker-select-${brewery.id}`;
  element.style.setProperty('--marker-color', MATCH_COLOR[brewery.match]);
  element.title = `${brewery.ko} · ${brewery.ja}`;
  element.addEventListener('mouseenter', () => { hoverId = brewery.id; render(); });
  element.addEventListener('mouseleave', () => { hoverId = null; render(); });
  element.addEventListener('focus', () => { hoverId = brewery.id; render(); });
  element.addEventListener('blur', () => { hoverId = null; render(); });
  element.addEventListener('click', () => pin(brewery.id));
  return element;
}

const accessToken = import.meta.env.PUBLIC_MAPBOX_TOKEN?.trim();
if (!accessToken?.startsWith('pk.')) {
  mapStatusEl.textContent = uiText(getLocale(), 'map.error');
  throw new Error('PUBLIC_MAPBOX_TOKEN is missing');
}
mapboxgl.accessToken = accessToken;
const map = new mapboxgl.Map({
  container: mapEl,
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [132.86, 33.65],
  zoom: 7.25,
  minZoom: 6,
  maxZoom: 14,
  projection: 'mercator',
  attributionControl: false,
});
map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-left');
map.addControl(new mapboxgl.AttributionControl({ compact: true }), 'bottom-right');

for (const brewery of BREWERIES) {
  const element = markerElement(brewery);
  const marker = new mapboxgl.Marker({ element, anchor: 'center' })
    .setLngLat([brewery.lng, brewery.lat])
    .addTo(map);
  markers.set(brewery.id, marker);
  markerElements.set(brewery.id, element);
}

const venueElement = document.createElement('div');
venueElement.className = 'mapbox-venue-marker';
venueElement.textContent = '祭';
const venueMarker = new mapboxgl.Marker({ element: venueElement, anchor: 'center' })
  .setLngLat([VENUE.lng, VENUE.lat])
  .addTo(map);

function spreadMarkers() {
  if (!mapReady) return;
  const points: (SpreadPoint & { id: number })[] = BREWERIES.map((brewery) => {
    const point = map.project([brewery.lng, brewery.lat]);
    return { id: brewery.id, x: point.x, y: point.y };
  });
  const venue = map.project([VENUE.lng, VENUE.lat]);
  points.push({ id: VENUE_ID, x: venue.x, y: venue.y, fixed: true });
  spreadPoints(points, MIN_MARKER_GAP);
  for (const point of points) {
    const position = map.unproject([point.x, point.y]);
    if (point.id === VENUE_ID) venueMarker.setLngLat(position);
    else markers.get(point.id)?.setLngLat(position);
  }
}

function render() {
  const locale = getLocale();
  const activeId = pinId ?? hoverId;
  const ranking = rankedProfiles(BREWERIES, tastePoint);
  const rankById = new Map(ranking.map((brewery, index) => [brewery.id, index + 1]));
  listEl.append(...ranking.map((brewery) => rowEls.find((row) => Number(row.dataset.id) === brewery.id)).filter((row): row is HTMLButtonElement => row !== undefined));
  let visibleCount = 0;
  for (const row of rowEls) {
    const id = Number(row.dataset.id);
    const brewery = byId.get(id);
    const shown = brewery !== undefined && isVisible(brewery);
    row.hidden = !shown;
    row.setAttribute('aria-current', String(id === activeId));
    const rank = rankById.get(id) ?? id;
    const tier = tasteTier(rank);
    const rankNumber = row.querySelector<HTMLElement>('[data-rank-number]');
    if (rankNumber) {
      rankNumber.textContent = String(rank);
      rankNumber.style.backgroundColor = MATCH_COLOR[tier];
    }
    if (shown) visibleCount += 1;
  }
  countEl.textContent = String(visibleCount);
  noResultsEl.hidden = visibleCount !== 0;
  searchStatusEl.textContent = appliedQuery
    ? uiText(getLocale(), 'search.results', { query: appliedQuery, count: visibleCount })
    : uiText(getLocale(), 'search.ready', { count: visibleCount });
  for (const detail of detailEls) detail.hidden = Number(detail.dataset.id) !== activeId;
  emptyEl.hidden = activeId !== null;

  const tasteProfile = profileFromPoint(tastePoint);
  tasteSummaryEl.textContent = uiText(locale, 'taste-selector.selected', tasteProfile);
  for (const cell of tasteCellEls) {
    const row = tasteLevel(cell.dataset.tasteRow ?? null, DEFAULT_TASTE_POINT.row);
    const column = tasteLevel(cell.dataset.tasteColumn ?? null, DEFAULT_TASTE_POINT.column);
    const selected = row === tastePoint.row && column === tastePoint.column;
    const cellProfile = profileFromPoint({ row, column });
    const label = uiText(locale, 'taste-selector.cell', cellProfile);
    cell.setAttribute('aria-pressed', String(selected));
    cell.setAttribute('aria-label', label);
    const hiddenLabel = cell.querySelector<HTMLElement>('[data-taste-cell-label]');
    if (hiddenLabel) hiddenLabel.textContent = label;
  }

  for (const brewery of BREWERIES) {
    const element = markerElements.get(brewery.id);
    if (!element) continue;
    element.hidden = !isVisible(brewery);
    const rank = rankById.get(brewery.id) ?? brewery.id;
    const tier = tasteTier(rank);
    element.textContent = String(rank);
    element.style.setProperty('--marker-color', MATCH_COLOR[tier]);
    element.title = `${uiText(locale, 'taste-selector.rank', { rank })} · ${locale === 'ko' ? `${brewery.ko} · ${brewery.ja}` : `${brewery.ja}${brewery.brand.nameKana ? ` · ${brewery.brand.nameKana}` : ''}`}`;
    element.setAttribute('role', 'button');
    element.setAttribute('aria-label', element.title);
    element.classList.toggle('is-active', brewery.id === activeId);
    element.style.zIndex = brewery.id === activeId ? '2' : '1';
  }
  for (const detail of detailEls) {
    const id = Number(detail.dataset.id);
    const rank = rankById.get(id) ?? id;
    const tier = tasteTier(rank);
    const rankNumber = detail.querySelector<HTMLElement>('[data-rank-number]');
    const rankBadge = detail.querySelector<HTMLElement>('[data-rank-badge]');
    if (rankNumber) {
      rankNumber.textContent = String(rank);
      rankNumber.style.backgroundColor = MATCH_COLOR[tier];
    }
    if (rankBadge) {
      rankBadge.textContent = uiText(locale, 'taste-selector.rank', { rank });
      rankBadge.style.color = MATCH_COLOR[tier];
      rankBadge.style.borderColor = MATCH_COLOR[tier];
    }
    for (const bar of detail.querySelectorAll<HTMLElement>('[data-profile-bar]')) bar.style.backgroundColor = MATCH_COLOR[tier];
  }
  venueElement.title = `${uiText(locale, 'map.venue')}\n${VENUE.addr}\n${VENUE.when}`;
  const zoomIn = mapEl.querySelector<HTMLElement>('.mapboxgl-ctrl-zoom-in');
  const zoomOut = mapEl.querySelector<HTMLElement>('.mapboxgl-ctrl-zoom-out');
  zoomIn?.setAttribute('aria-label', uiText(locale, 'map.zoom_in'));
  zoomIn?.setAttribute('title', uiText(locale, 'map.zoom_in'));
  zoomOut?.setAttribute('aria-label', uiText(locale, 'map.zoom_out'));
  zoomOut?.setAttribute('title', uiText(locale, 'map.zoom_out'));
}

function pin(id: number) {
  const alreadyPinned = pinId === id;
  pinId = alreadyPinned ? null : id;
  hoverId = null;
  const brewery = byId.get(id);
  if (!alreadyPinned && brewery) map.flyTo({ center: [brewery.lng, brewery.lat], zoom: Math.max(map.getZoom(), 10), duration: 600 });
  render();
}

function clearSelection() {
  pinId = null;
  hoverId = null;
  render();
}

function applyFilters() {
  const survives = (id: number | null) => {
    if (id === null) return false;
    const brewery = byId.get(id);
    return brewery !== undefined && isVisible(brewery);
  };
  if (!survives(hoverId)) hoverId = null;
  if (!survives(pinId)) pinId = null;
  render();
}

for (const button of document.querySelectorAll<HTMLButtonElement>('[data-clear]')) button.addEventListener('click', clearSelection);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') clearSelection(); });
for (const row of rowEls) {
  const id = Number(row.dataset.id);
  row.addEventListener('mouseenter', () => { hoverId = id; render(); });
  row.addEventListener('mouseleave', () => { hoverId = null; render(); });
  row.addEventListener('focus', () => { hoverId = id; render(); });
  row.addEventListener('blur', () => { hoverId = null; render(); });
  row.addEventListener('click', () => pin(id));
}
regionEl.addEventListener('change', () => { region = regionEl.value; applyFilters(); });
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
for (const cell of tasteCellEls) {
  cell.addEventListener('click', () => {
    tastePoint = {
      row: tasteLevel(cell.dataset.tasteRow ?? null, DEFAULT_TASTE_POINT.row),
      column: tasteLevel(cell.dataset.tasteColumn ?? null, DEFAULT_TASTE_POINT.column),
    };
    localStorage.setItem('ehime-taste-row', String(tastePoint.row));
    localStorage.setItem('ehime-taste-column', String(tastePoint.column));
    hoverId = null;
    render();
  });
}
tasteResetEl.addEventListener('click', () => {
  tastePoint = { ...DEFAULT_TASTE_POINT };
  localStorage.removeItem('ehime-taste-row');
  localStorage.removeItem('ehime-taste-column');
  hoverId = null;
  render();
});

map.on('load', () => {
  mapReady = true;
  mapStatusEl.hidden = true;
  const bounds = new mapboxgl.LngLatBounds();
  for (const brewery of BREWERIES) bounds.extend([brewery.lng, brewery.lat]);
  map.fitBounds(bounds, { padding: 44, duration: 0 });
  spreadMarkers();
  render();
  const zoomIn = mapEl.querySelector<HTMLElement>('.mapboxgl-ctrl-zoom-in');
  const zoomOut = mapEl.querySelector<HTMLElement>('.mapboxgl-ctrl-zoom-out');
  zoomIn?.setAttribute('data-testid', 'guide-map-zoom-in');
  zoomOut?.setAttribute('data-testid', 'guide-map-zoom-out');
});
map.on('moveend', spreadMarkers);
map.on('error', (event) => {
  const message = event.error?.message ?? '';
  if (/401|403|token|style/i.test(message)) {
    mapStatusEl.hidden = false;
    mapStatusEl.textContent = uiText(getLocale(), 'map.error');
  }
});
onLocaleChange(() => render());
render();
