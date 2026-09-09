/**
 * 데이터·기하 로직 자체 점검. `npm run check` (node가 .ts를 그대로 실행).
 * 브라우저나 테스트 프레임워크 없이 도는 것만 담는다.
 */
import assert from 'node:assert/strict';
import { ALL_REGIONS, BREWERIES, REGION_FILTERS, tasteBars } from './data/breweries.ts';
import { BRANDS, PRODUCERS } from './data/catalog.ts';
import { PRODUCTS } from './data/products.ts';
import { PERSONAL_GUIDES } from './data/guides.ts';
import { matchesQuery, searchText } from './lib/search.ts';
import type { SourceRef } from './data/types.ts';
import { spreadPoints } from './lib/spread.ts';

// --- 데이터 ---

assert.equal(BREWERIES.length, 19, '참가 브랜드는 19곳');
assert.equal(new Set(BREWERIES.map((b) => b.id)).size, 19, 'id 중복 없음');

for (const b of BREWERIES) {
  // 맛 프로필이 비면 상세 패널이 빈칸으로 렌더링된다.
  assert.ok(b.pair && b.temp && b.step, `${b.ko}: 맛 프로필 텍스트 누락`);
  for (const bar of tasteBars(b)) {
    assert.ok(bar.value >= 1 && bar.value <= 5, `${b.ko}: ${bar.label} 값이 1~5 밖 (${bar.value})`);
  }
  // 에히메현 대략 경계. 좌표를 뒤바꿔 넣으면 여기서 걸린다.
  assert.ok(b.lat > 32.9 && b.lat < 34.3, `${b.ko}: 위도가 에히메 밖 (${b.lat})`);
  assert.ok(b.lng > 132.2 && b.lng < 133.8, `${b.ko}: 경도가 에히메 밖 (${b.lng})`);
}

// 필터 라벨의 "(N곳)"은 데이터에서 파생되므로 합계가 전체와 같아야 한다.
const regionCounts = REGION_FILTERS.filter((f) => f.value !== ALL_REGIONS).map((f) =>
  Number(/\((\d+)곳\)/.exec(f.label)?.[1]),
);
assert.equal(
  regionCounts.reduce((sum, n) => sum + n, 0),
  BREWERIES.length,
  '지역별 개수 합이 전체와 다름',
);

// --- 마커 밀어내기 ---

{
  const points = [
    { x: 100, y: 100 },
    { x: 100, y: 100 },
  ];
  spreadPoints(points, 34);
  const gap = Math.hypot(points[0]!.x - points[1]!.x, points[0]!.y - points[1]!.y);
  assert.ok(Number.isFinite(gap), '완전히 겹친 점에서 NaN이 나옴');
  assert.ok(gap >= 34, `완전히 겹친 두 점이 최소 간격 미달 (${gap})`);
}

{
  const venue = { x: 0, y: 0, fixed: true };
  const near = { x: 5, y: 0 };
  spreadPoints([venue, near], 34);
  assert.deepEqual({ x: venue.x, y: venue.y }, { x: 0, y: 0 }, '고정점이 움직임');
  assert.ok(Math.hypot(near.x - venue.x, near.y - venue.y) >= 34, '고정점 주변 마커가 안 밀려남');
}

{
  const spaced = [
    { x: 0, y: 0 },
    { x: 200, y: 0 },
  ];
  spreadPoints(spaced, 34);
  assert.deepEqual(spaced, [{ x: 0, y: 0 }, { x: 200, y: 0 }], '이미 떨어진 점을 건드림');
}

console.log('check ok — 브랜드 %d곳, 마커 밀어내기 정상', BREWERIES.length);

// 회사·브랜드·제품의 독립 식별자와 관계를 검사한다.
for (const [label, records] of [['양조장', PRODUCERS], ['브랜드', BRANDS], ['제품', PRODUCTS]] as const) {
  assert.equal(new Set(records.map((record) => record.id)).size, records.length, `${label} id 중복`);
}
const expectedBrands = ['梅錦', '華姫桜', '石鎚', '寿喜心', '日本心', '伊予賀儀屋', '山丹正宗', '雪雀', '桜うづまき', '仁喜多津', '酒仙栄光', '京ひな', '千代の亀', '風の里', '花神', '城川郷', '媛囃子', '名門', '野武士'];
assert.deepEqual(BRANDS.filter((brand) => brand.festival2026).map((brand) => brand.nameJa), expectedBrands);
assert.equal(PERSONAL_GUIDES.length, 19);
assert.equal(new Set(PERSONAL_GUIDES.map((guide) => guide.brandId)).size, 19);
const producerIds = new Set(PRODUCERS.map((producer) => producer.id));
const brandIds = new Set(BRANDS.map((brand) => brand.id));
function validateSources(sources: SourceRef[]) {
  assert.ok(sources.length > 0, '출처 누락');
  for (const source of sources) {
    const url = new URL(source.url);
    assert.ok(url.protocol === 'https:' || url.protocol === 'http:', '웹 출처 URL 필요');
    assert.ok(source.title.trim(), '출처 제목 누락');
    assert.match(source.accessedAt, /^\d{4}-\d{2}-\d{2}$/);
  }
}
for (const producer of PRODUCERS) {
  assert.ok(producer.lat > 32.9 && producer.lat < 34.3 && producer.lng > 132.2 && producer.lng < 133.8);
  assert.equal(producer.location.precision, 'locality');
  validateSources([...producer.sources, producer.location.source]);
}
for (const brand of BRANDS) {
  assert.ok(producerIds.has(brand.breweryId), `${brand.id}: 양조장 연결 누락`);
  validateSources(brand.sources);
  if (brand.festival2026) assert.ok(PERSONAL_GUIDES.some((guide) => guide.brandId === brand.id));
}
for (const product of PRODUCTS) {
  assert.ok(brandIds.has(product.brandId), `${product.id}: 브랜드 연결 누락`);
  validateSources(product.sources);
  assert.equal(product.festivalOffering, 'unknown', '2026 제품 출품 근거가 아직 없는 데이터셋');
  assert.match(product.specAsOf, /^\d{4}-\d{2}-\d{2}$/);
  if (product.kind === 'sake') {
    if (typeof product.polishingRatio === 'number') assert.ok(product.polishingRatio > 0 && product.polishingRatio <= 100);
    for (const value of [product.alcohol, product.acidity, product.aminoAcidity]) {
      if (typeof value === 'number') assert.ok(Number.isFinite(value) && value >= 0);
    }
  } else {
    assert.ok(product.ingredients.length > 0);
    assert.ok(!('polishingRatio' in product), '소주에 청주 사양을 섞지 않는다');
  }
}
// 검색은 독립 문자열 모델에서 한/일/가나/회사/도시/제품과 결합 검색을 검사한다.
const yoro = BREWERIES.find((guide) => guide.ja === '風の里');
assert.ok(yoro);
for (const query of ['風の里', 'かぜのさと', 'カゼノサト', '카제노사토', '養老酒造', '요로', '오즈', 'Sakura', '叶川', '風の里 Sakura']) {
  assert.ok(matchesQuery(searchText(yoro), query), `검색 누락: ${query}`);
}
assert.ok(!matchesQuery(searchText(yoro), '존재하지않는술'));
assert.ok(matchesQuery(searchText(yoro), ''));
assert.equal(PRODUCTS.find((product) => product.id === 'kanogawa-junmai')?.alcohol, null, '불일치 도수 추정 금지');
console.log('catalog ok — 양조장 %d, 참가 브랜드 19, 제품 %d, 출처·연결·검색 정상', PRODUCERS.length, PRODUCTS.length);
