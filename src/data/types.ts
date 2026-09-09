export type MatchRank = 1 | 2 | 3;
export type RegionCode = '東予' | '中予' | '南予';
export interface SourceRef {
  title: string;
  url: string;
  type: 'brewery-official' | 'ehime-sake-association' | 'government' | 'official-tourism' | 'retailer' | 'other';
  accessedAt: string;
}
export interface Brewery {
  id: string;
  nameJa: string;
  nameKana: string | null;
  nameKo: string;
  founded: number | null;
  region: RegionCode;
  cityJa: string;
  cityKo: string;
  address: string;
  lat: number;
  lng: number;
  location: { precision: 'locality'; label: string; source: SourceRef };
  officialUrl: string;
  descriptionKo: string;
  brewingFeatures: string[];
  water: string | null;
  rice: string[] | null;
  sources: SourceRef[];
}
export interface Brand {
  id: string;
  breweryId: Brewery['id'];
  nameJa: string;
  nameKana: string | null;
  nameKo: string;
  aliases: string[];
  festival2026: boolean;
  lineupNote: string | null;
  sources: SourceRef[];
}
export interface PersonalGuide {
  id: number;
  brandId: Brand['id'];
  match: MatchRank;
  style: string;
  pick: string;
  jp: string;
  jpKo: string;
  body: number;
  acid: number;
  aroma: number;
  dry: number;
  pair: string;
  temp: string;
  step: string;
}
type SpecValue = number | string | null;
interface ProductBase {
  id: string;
  brandId: Brand['id'];
  nameJa: string;
  nameKo: string;
  nameKana: string | null;
  category: string;
  alcohol: SpecValue;
  descriptionKo: string;
  availability: '定番' | '季節限定' | '数量限定' | '不明';
  festivalOffering: 'unknown' | 'confirmed';
  salesStatus: 'listed' | 'unknown';
  specAsOf: string;
  batch: string | null;
  notes: string[];
  sources: SourceRef[];
}
export interface SakeProduct extends ProductBase {
  kind: 'sake';
  rice: string[] | null;
  polishingRatio: SpecValue;
  nihonshudo: SpecValue;
  acidity: SpecValue;
  aminoAcidity: SpecValue;
  yeast: string | null;
  /** 확인된 속성만 저장. 빈 배열은 미확인이지 화입 판정이 아니다. */
  attributes: Array<'生酒' | '生原酒' | '無濾過' | '無濾過生原酒' | '原酒' | '火入れ' | 'にごり' | '山廃' | '生酛' | '生詰'>;
}
export interface ShochuProduct extends ProductBase {
  kind: 'shochu';
  ingredients: string[];
  distillation: string | null;
}
export type Product = SakeProduct | ShochuProduct;
