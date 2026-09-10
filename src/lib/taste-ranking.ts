export type TasteLevel = 1 | 2 | 3 | 4 | 5;
export interface TastePoint { row: TasteLevel; column: TasteLevel }
export interface TasteProfile { id: number; body: number; acid: number; aroma: number; dry: number }

export const DEFAULT_TASTE_POINT: TastePoint = { row: 3, column: 2 };

export function profileFromPoint(point: TastePoint) {
  return {
    body: point.row,
    acid: 6 - point.column,
    aroma: 6 - point.row,
    dry: point.column,
  };
}

export function rankedProfiles<T extends TasteProfile>(profiles: T[], point: TastePoint) {
  const target = profileFromPoint(point);
  return [...profiles].sort((a, b) => {
    const distance = (profile: T) =>
      (profile.body - target.body) ** 2 +
      (profile.acid - target.acid) ** 2 +
      (profile.aroma - target.aroma) ** 2 +
      (profile.dry - target.dry) ** 2;
    return distance(a) - distance(b) || a.id - b.id;
  });
}

export function tasteTier(rank: number): 1 | 2 | 3 {
  if (rank <= 6) return 1;
  if (rank <= 13) return 2;
  return 3;
}
