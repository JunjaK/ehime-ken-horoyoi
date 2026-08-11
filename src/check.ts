/**
 * 데이터·기하 로직 자체 점검. `npm run check` (node가 .ts를 그대로 실행).
 * 브라우저나 테스트 프레임워크 없이 도는 것만 담는다.
 */
import assert from 'node:assert/strict';
import { ALL_REGIONS, BREWERIES, REGION_FILTERS, tasteBars } from './data/breweries.ts';
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
