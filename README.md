# 에히메현 양조장 지도

호로요이 페스타 2026(2026.10.02, 마쓰야마 조자야마 공원) 참가 19개 브랜드 지도.
지역 필터, 맛 프로필, 우선 시도할 술, 부스에서 쓸 일본어 문장을 한 페이지에 담았다.

Astro 7 정적 사이트. 지도는 Leaflet + CARTO 타일.

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 |
| `npm run build` | `dist/`로 정적 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run check` | 데이터·마커 배치 로직 자체 점검 |
| `npm run typecheck` | `astro check` |

## 구조

- `src/data/breweries.ts` — 19개 브랜드 데이터(SSOT). 지역별 개수 같은 파생값은 여기서 계산한다.
- `src/lib/spread.ts` — 겹친 지도 마커를 밀어내는 순수 함수.
- `src/scripts/map.ts` — Leaflet 초기화와 목록·지도·상세 패널 연동.
- `src/pages/index.astro` — 마크업과 스타일. 상세 패널 19개는 전부 빌드 시점에 렌더링하고 JS는 표시 여부만 토글한다.
