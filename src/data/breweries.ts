import { BRANDS, PRODUCERS } from './catalog.ts';
import { PRODUCTS } from './products.ts';
import { PERSONAL_GUIDES } from './guides.ts';
import type { MatchRank, RegionCode } from './types.ts';
export type { MatchRank, RegionCode } from './types.ts';

/** 기존 지도/상세 화면용 파생 뷰. 회사·브랜드·개인 평가는 원본 데이터에서 분리한다. */
export const BREWERIES = PERSONAL_GUIDES.map((guide) => {
  const brand = BRANDS.find((item) => item.id === guide.brandId);
  const producer = PRODUCERS.find((item) => item.id === brand?.breweryId);
  if (!brand || !producer) throw new Error(`브랜드/제조사 연결 누락: ${guide.brandId}`);
  const relatedBrands = BRANDS.filter((item) => item.breweryId === producer.id);
  const products = PRODUCTS.filter((item) => relatedBrands.some((related) => related.id === item.brandId));
  return {
    ...guide, brand, producer, relatedBrands, products,
    ko: brand.nameKo, ja: brand.nameJa, brewery: producer.nameJa,
    city: producer.cityKo, region: producer.region,
    founded: producer.founded === null ? '미확인' : `${producer.founded}년 창업`,
    addr: producer.address, lat: producer.lat, lng: producer.lng,
    water: [producer.water, producer.rice?.join(' · ')].filter(Boolean).join(' · '),
  };
});
export type BrandGuide = (typeof BREWERIES)[number];

export const VENUE = {
  lat: 33.842,
  lng: 132.766,
  name: '회장 · 조자야마 공원 관리광장',
  addr: '松山市堀之内 城山公園 管理広場',
  when: '10/2(금) 접수 18:00 · 건배 19:00',
} as const;

export const MATCH_LABEL: Record<MatchRank, string> = {
  1: '★ 취향 최우선',
  2: '다음 우선순위',
  3: '후순위 · 확인 필요',
};

export const REGION_LABEL_KO: Record<RegionCode, string> = {
  東予: '도요(에히메 동부)',
  中予: '주요(마쓰야마 권역)',
  南予: '난요(에히메 남부)',
};

export const ALL_REGIONS = 'all';

/** 지역 필터 옵션. 개수는 데이터에서 파생시켜 라벨이 어긋나지 않게 한다. */
export const REGION_FILTERS = [
  { value: ALL_REGIONS, label: `전체 ${BREWERIES.length}곳` },
  ...(['東予', '中予', '南予'] satisfies RegionCode[]).map((region) => ({
    value: region,
    label: `${
      { 東予: '동부 도요 · 사이조 · 이마바리', 中予: '중부 주요 · 마쓰야마', 南予: '남부 난요 · 우치코~우와지마' }[region]
    } (${BREWERIES.filter((b) => b.region === region).length}곳)`,
  })),
];

export function tasteBars(b: BrandGuide) {
  return [
    { label: '호우쥰도', value: b.body },
    { label: '산미', value: b.acid },
    { label: '향', value: b.aroma },
    { label: '드라이', value: b.dry },
  ];
}
