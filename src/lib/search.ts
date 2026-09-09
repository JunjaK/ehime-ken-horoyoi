import type { BrandGuide } from '../data/breweries.ts';

/** 공백·영문 대소문자·가타카나 입력을 정규화한다. */
export function normalizeQuery(value: string) {
  return value.normalize('NFKC').toLocaleLowerCase('ja').replace(/[ァ-ヶ]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60),
  ).replace(/\s+/g, ' ').trim();
}
export function searchText(guide: BrandGuide) {
  const { producer, relatedBrands, products } = guide;
  return normalizeQuery([
    producer.nameJa, producer.nameKana, producer.nameKo, producer.cityJa, producer.cityKo, producer.address,
    ...relatedBrands.flatMap((brand) => [brand.nameJa, brand.nameKana, brand.nameKo, ...brand.aliases]),
    ...products.flatMap((product) => [product.nameJa, product.nameKana, product.nameKo]),
  ].filter(Boolean).join(' '));
}
export function matchesQuery(text: string, query: string) {
  return normalizeQuery(query).split(' ').every((word) => text.includes(word));
}
