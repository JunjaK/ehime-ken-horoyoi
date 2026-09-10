export type TasteLevel = 1 | 2 | 3 | 4 | 5;
export interface TastePoint { row: TasteLevel; column: TasteLevel }
export interface TasteProfile { id: number; body: number; acid: number; aroma: number; dry: number; tastePenalty?: number }

export type TasteQuadrant = 'kunshu' | 'jukushu' | 'soshu' | 'junshu' | 'balanced';

export const DEFAULT_TASTE_POINT: TastePoint = { row: 2, column: 4 };

export function profileFromPoint(point: TastePoint) {
  return {
    body: point.column,
    acid: 3,
    aroma: 6 - point.row,
    dry: 3,
  };
}

export function tasteQuadrant(point: TastePoint): TasteQuadrant {
  if (point.row === 3 || point.column === 3) return 'balanced';
  if (point.row < 3 && point.column < 3) return 'kunshu';
  if (point.row < 3 && point.column > 3) return 'jukushu';
  if (point.row > 3 && point.column < 3) return 'soshu';
  return 'junshu';
}

export function rankedProfiles<T extends TasteProfile>(profiles: T[], point: TastePoint) {
  const target = profileFromPoint(point);
  return [...profiles].sort((a, b) => {
    const distance = (profile: T) =>
      (profile.body - target.body) ** 2 +
      (profile.aroma - target.aroma) ** 2 +
      (profile.tastePenalty ?? 0);
    return distance(a) - distance(b) || a.id - b.id;
  });
}

export function tasteTier(rank: number): 1 | 2 | 3 {
  if (rank <= 6) return 1;
  if (rank <= 13) return 2;
  return 3;
}
