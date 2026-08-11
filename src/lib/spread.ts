export interface SpreadPoint {
  x: number;
  y: number;
  /** 고정점은 밀리지 않고 주변 점만 밀어낸다 (회장 마커). */
  fixed?: boolean;
}

/**
 * 겹치는 지도 마커를 화면 좌표계에서 서로 밀어내 최소 간격을 확보한다.
 * 입력 배열을 제자리에서 수정하고 그대로 돌려준다.
 */
export function spreadPoints<T extends SpreadPoint>(points: T[], minDistance: number, maxIterations = 60): T[] {
  for (let pass = 0; pass < maxIterations; pass++) {
    let overlapping = false;

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i]!;
        const b = points[j]!;

        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let distance = Math.hypot(dx, dy);
        if (distance >= minDistance) continue;

        // 정확히 겹친 두 점은 밀어낼 방향이 없다. 인덱스로 결정되는 방향을 준다.
        if (distance < 0.01) {
          dx = Math.cos(i * 2.1);
          dy = Math.sin(i * 2.1);
          distance = 1;
        }

        const ux = dx / distance;
        const uy = dy / distance;
        const push = (minDistance - distance) / 2 + 0.5;

        // 상대가 고정점이면 이쪽이 두 배로 물러난다.
        if (!a.fixed) {
          a.x -= ux * push * (b.fixed ? 2 : 1);
          a.y -= uy * push * (b.fixed ? 2 : 1);
        }
        if (!b.fixed) {
          b.x += ux * push * (a.fixed ? 2 : 1);
          b.y += uy * push * (a.fixed ? 2 : 1);
        }
        overlapping = true;
      }
    }

    if (!overlapping) break;
  }

  return points;
}
