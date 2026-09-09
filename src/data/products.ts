import type { Product } from './types.ts';

/** 未確認数値は null。掲載確認は在庫・2026出品の確認ではない。 */
export const PRODUCTS: Product[] = [
  {
    "id": "ume-daiginjo",
    "brandId": "brand-1",
    "kind": "sake",
    "nameJa": "梅錦 純米大吟醸",
    "nameKo": "우메니시키 준마이다이긴죠",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": "16以上17未満",
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "梅錦 純米大吟醸｜商品情報",
        "url": "https://www.umenishiki.com/lineup/225/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "山田錦"
    ],
    "polishingRatio": 40,
    "nihonshudo": 2.9,
    "acidity": 1.3,
    "aminoAcidity": 1,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "ume-sakehitosuji",
    "brandId": "brand-1",
    "kind": "sake",
    "nameJa": "梅錦 酒一筋",
    "nameKo": "우메니시키 사케히토스지",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": "16以上17未満",
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "梅錦 酒一筋｜商品情報",
        "url": "https://www.umenishiki.com/lineup/363/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "山田錦"
    ],
    "polishingRatio": 60,
    "nihonshudo": -6,
    "acidity": 1.7,
    "aminoAcidity": 1.7,
    "yeast": null,
    "attributes": [
      "原酒"
    ]
  },
  {
    "id": "ume-nama",
    "brandId": "brand-1",
    "kind": "sake",
    "nameJa": "梅錦 純米大吟醸生酒",
    "nameKo": "우메니시키 준마이다이긴죠 나마",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": "15以上16未満",
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "梅錦 純米大吟醸生酒｜商品情報",
        "url": "https://www.umenishiki.com/lineup/218/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "彗星"
    ],
    "polishingRatio": 50,
    "nihonshudo": -4,
    "acidity": 1.8,
    "aminoAcidity": 1.1,
    "yeast": null,
    "attributes": [
      "生酒"
    ]
  },
  {
    "id": "hana-aged",
    "brandId": "brand-2",
    "kind": "sake",
    "nameJa": "華姫桜 純米大吟醸無濾過原酒 十年熟成",
    "nameKo": "하나히메자쿠라 10년 숙성",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": null,
    "descriptionKo": "공식 숍에 소개된 장기 숙성 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "華姫桜 純米大吟醸無濾過原酒 十年熟成｜商品情報",
        "url": "https://kondousyuzou.shop-pro.jp/?pid=184364473",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過",
      "原酒"
    ]
  },
  {
    "id": "hana-shizuku",
    "brandId": "brand-2",
    "kind": "sake",
    "nameJa": "華姫桜 しずく媛 無濾過純米吟醸原酒",
    "nameKo": "하나히메자쿠라 시즈쿠히메",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "華姫桜 しずく媛 無濾過純米吟醸原酒｜商品情報",
        "url": "https://kondousyuzou.shop-pro.jp/?pid=184364714",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過",
      "原酒"
    ]
  },
  {
    "id": "hana-junmai",
    "brandId": "brand-2",
    "kind": "sake",
    "nameJa": "華姫桜 純米酒",
    "nameKo": "하나히메자쿠라 준마이",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "華姫桜 純米酒｜商品情報",
        "url": "https://kondousyuzou.shop-pro.jp/?pid=184364755",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "ishi-green",
    "brandId": "brand-3",
    "kind": "sake",
    "nameJa": "石鎚 純米吟醸 緑ラベル",
    "nameKo": "이시즈치 미도리 라벨",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": null,
    "descriptionKo": "양조장이 대표 식중주로 권하는 정규 제품.",
    "availability": "定番",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "石鎚 純米吟醸 緑ラベル｜商品情報",
        "url": "https://www.ishizuchi.co.jp/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "ishi-yamada",
    "brandId": "brand-3",
    "kind": "sake",
    "nameJa": "石鎚 純米吟醸 山田錦50",
    "nameKo": "이시즈치 야마다니시키 50",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": null,
    "descriptionKo": "야마다니시키의 폭넓은 맛을 소개하는 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "石鎚 純米吟醸 山田錦50｜商品情報",
        "url": "https://www.ishizuchi.co.jp/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "山田錦"
    ],
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "ishi-muroka",
    "brandId": "brand-3",
    "kind": "sake",
    "nameJa": "石鎚 無濾過純米",
    "nameKo": "이시즈치 무여과 준마이",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "石鎚 無濾過純米｜商品情報",
        "url": "https://www.ishizuchi.co.jp/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過"
    ]
  },
  {
    "id": "ishi-sakura",
    "brandId": "brand-3",
    "kind": "sake",
    "nameJa": "石鎚 純米大吟醸 さくらひめ",
    "nameKo": "이시즈치 사쿠라히메",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 16,
    "descriptionKo": "꽃 유래 효모를 사용한 화사한 향의 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2023-03-30",
    "batch": "令和4BY",
    "notes": [
      "2023년 출시 자료의 사양입니다. 2026년 로트 사양은 미확인."
    ],
    "sources": [
      {
        "title": "石鎚 純米大吟醸 さくらひめ｜商品情報",
        "url": "https://www.ishizuchi.co.jp/2023/03/30/【新商品】石鎚　純米大吟醸　さくらひめ/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 44,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": "愛媛さくらひめ Type1 Tropical",
    "attributes": []
  },
  {
    "id": "ishi-hiya",
    "brandId": "brand-3",
    "kind": "sake",
    "nameJa": "石鎚 特別純米 ひやおろし",
    "nameKo": "이시즈치 히야오로시",
    "nameKana": null,
    "category": "特別純米",
    "alcohol": null,
    "descriptionKo": "공식 계절주 목록의 가을 제품. 현재 재고는 미확인.",
    "availability": "季節限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "石鎚 特別純米 ひやおろし｜商品情報",
        "url": "https://www.ishizuchi.co.jp/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "ishi-ubu",
    "brandId": "brand-3",
    "kind": "sake",
    "nameJa": "石鎚 手造り純米 初（うぶ）",
    "nameKo": "이시즈치 우부",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "季節限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "石鎚 手造り純米 初（うぶ）｜商品情報",
        "url": "https://www.ishizuchi.co.jp/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "suki-yamada",
    "brandId": "brand-4",
    "kind": "sake",
    "nameJa": "壽㐂心 純米大吟醸 山田錦",
    "nameKo": "스키고코로 야마다니시키",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 16,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "壽㐂心 純米大吟醸 山田錦｜商品情報",
        "url": "https://sukigokoro.official.ec/items/all",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "山田錦"
    ],
    "polishingRatio": 50,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "suki-shizuku",
    "brandId": "brand-4",
    "kind": "sake",
    "nameJa": "壽㐂心 純米大吟醸 しずく媛",
    "nameKo": "스키고코로 시즈쿠히메",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 16,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "壽㐂心 純米大吟醸 しずく媛｜商品情報",
        "url": "https://sukigokoro.official.ec/items/all",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 45,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "suki-omachi",
    "brandId": "brand-4",
    "kind": "sake",
    "nameJa": "壽㐂心 純米吟醸 雄町",
    "nameKo": "스키고코로 오마치",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 16,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "壽㐂心 純米吟醸 雄町｜商品情報",
        "url": "https://sukigokoro.official.ec/items/all",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "雄町"
    ],
    "polishingRatio": 55,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "suki-nikomaru",
    "brandId": "brand-4",
    "kind": "sake",
    "nameJa": "壽㐂心 純米酒 ニコマル",
    "nameKo": "스키고코로 니코마루",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "壽㐂心 純米酒 ニコマル｜商品情報",
        "url": "https://sukigokoro.official.ec/items/all",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "ニコマル"
    ],
    "polishingRatio": 65,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "yamato-dai",
    "brandId": "brand-5",
    "kind": "sake",
    "nameJa": "日本心 純米大吟醸",
    "nameKo": "야마토고코로 준마이다이긴죠",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "日本心 純米大吟醸｜商品情報",
        "url": "https://www.yamatogokoro.co.jp/item/日本心　道　純米大吟醸",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "山田錦"
    ],
    "polishingRatio": 40,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "yamato-nama",
    "brandId": "brand-5",
    "kind": "sake",
    "nameJa": "日本心 純米大吟醸 生酒",
    "nameKo": "야마토고코로 다이긴죠 나마",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 14,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "日本心 純米大吟醸 生酒｜商品情報",
        "url": "https://www.yamatogokoro.co.jp/item/日本心　純米大吟醸　生酒",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 50,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "生酒"
    ]
  },
  {
    "id": "yamato-ginjo",
    "brandId": "brand-5",
    "kind": "sake",
    "nameJa": "日本心 純米吟醸",
    "nameKo": "야마토고코로 준마이긴죠",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "日本心 純米吟醸｜商品情報",
        "url": "https://www.yamatogokoro.co.jp/item/日本心　純米吟醸",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 50,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "kagiya-red",
    "brandId": "brand-6",
    "kind": "sake",
    "nameJa": "伊予賀儀屋 無濾過 純米 赤ラベル",
    "nameKo": "이요카기야 아카 라벨",
    "nameKana": null,
    "category": "純米",
    "alcohol": 14.5,
    "descriptionKo": "공식 상품 목록에 소개된 純米 제품.",
    "availability": "定番",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "伊予賀儀屋 無濾過 純米 赤ラベル｜商品情報",
        "url": "https://www.seiryosyuzo.com/brands/iyokagiya",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 60,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過",
      "火入れ"
    ]
  },
  {
    "id": "kagiya-black",
    "brandId": "brand-6",
    "kind": "sake",
    "nameJa": "伊予賀儀屋 無濾過 純米吟醸 黒ラベル",
    "nameKo": "이요카기야 쿠로 라벨",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15.5,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "定番",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "伊予賀儀屋 無濾過 純米吟醸 黒ラベル｜商品情報",
        "url": "https://www.seiryosyuzo.com/brands/iyokagiya",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 50,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過",
      "火入れ"
    ]
  },
  {
    "id": "kagiya-green",
    "brandId": "brand-6",
    "kind": "sake",
    "nameJa": "伊予賀儀屋 無濾過 純米大吟醸 グリーンラベル",
    "nameKo": "이요카기야 그린 라벨",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 16.5,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "定番",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "伊予賀儀屋 無濾過 純米大吟醸 グリーンラベル｜商品情報",
        "url": "https://www.seiryosyuzo.com/brands/iyokagiya",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 45,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過",
      "火入れ"
    ]
  },
  {
    "id": "kagiya-sakura",
    "brandId": "brand-6",
    "kind": "sake",
    "nameJa": "伊予賀儀屋 無濾過 純米 さくらひめ 美しラベル",
    "nameKo": "이요카기야 사쿠라히메 우마시 라벨",
    "nameKana": null,
    "category": "純米",
    "alcohol": 15.5,
    "descriptionKo": "공식 상품 목록에 소개된 純米 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "伊予賀儀屋 無濾過 純米 さくらひめ 美しラベル｜商品情報",
        "url": "https://www.seiryosyuzo.com/brands/iyokagiya",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 60,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": "さくらひめ",
    "attributes": [
      "無濾過"
    ]
  },
  {
    "id": "kagiya-toshi",
    "brandId": "brand-6",
    "kind": "sake",
    "nameJa": "伊予賀儀屋 責任仕込酒 無濾過 純米吟醸おりがらみ生 TOSHI’S",
    "nameKo": "이요카기야 토시스 오리가라미 나마",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15.5,
    "descriptionKo": "공식 안내의 1월 계절 제품.",
    "availability": "季節限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "伊予賀儀屋 責任仕込酒 無濾過 純米吟醸おりがらみ生 TOSHI’S｜商品情報",
        "url": "https://www.seiryosyuzo.com/brands/iyokagiya",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 60,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過",
      "生酒"
    ]
  },
  {
    "id": "kagiya-gold",
    "brandId": "brand-6",
    "kind": "sake",
    "nameJa": "伊予賀儀屋 無濾過 大吟醸 生原酒 スタンダード kagiya the Gold",
    "nameKo": "이요카기야 더 골드",
    "nameKana": null,
    "category": "大吟醸",
    "alcohol": 17.5,
    "descriptionKo": "공식 상품 목록에 소개된 大吟醸 제품.",
    "availability": "数量限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [
      "양조장 자체 행사 한정 안내입니다. 호로요이 페스타 출품 확인이 아닙니다."
    ],
    "sources": [
      {
        "title": "伊予賀儀屋 無濾過 大吟醸 生原酒 スタンダード kagiya the Gold｜商品情報",
        "url": "https://www.seiryosyuzo.com/brands/iyokagiya",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "山田錦"
    ],
    "polishingRatio": 35,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過",
      "生原酒"
    ]
  },
  {
    "id": "yamatan-shizuku",
    "brandId": "brand-7",
    "kind": "sake",
    "nameJa": "山丹正宗 しずく媛 純米吟醸",
    "nameKo": "야마탄마사무네 시즈쿠히메",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 16,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "山丹正宗 しずく媛 純米吟醸｜商品情報",
        "url": "https://www.yamatan.jp/?pid=12890519",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 50,
    "nihonshudo": 4,
    "acidity": 1.8,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "yamatan-matsuyama",
    "brandId": "brand-7",
    "kind": "sake",
    "nameJa": "山丹正宗 純米酒 松山三井",
    "nameKo": "야마탄마사무네 마쓰야마미쓰이",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [
      "공식 숍에 따르면 「特別純米」에서 「純米酒」로 명칭 변경."
    ],
    "sources": [
      {
        "title": "山丹正宗 純米酒 松山三井｜商品情報",
        "url": "https://www.yamatan.jp/?pid=37177246",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 60,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "yamatan-furin",
    "brandId": "brand-7",
    "kind": "sake",
    "nameJa": "山丹正宗 風鈴 純米吟醸",
    "nameKo": "야마탄마사무네 후린",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 14,
    "descriptionKo": "여름 한정 제품.",
    "availability": "季節限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "山丹正宗 風鈴 純米吟醸｜商品情報",
        "url": "https://www.yamatan.jp/?pid=4617358",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": 60,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "yuki-ginjo",
    "brandId": "brand-8",
    "kind": "sake",
    "nameJa": "雪雀 純米吟醸",
    "nameKo": "유키스즈메 준마이긴죠",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 14,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "雪雀 純米吟醸｜商品情報",
        "url": "https://yukisuzume.com/product/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "yuki-junon",
    "brandId": "brand-8",
    "kind": "sake",
    "nameJa": "雪雀 特別純米酒 純音",
    "nameKo": "유키스즈메 준온",
    "nameKana": null,
    "category": "特別純米",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 特別純米 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "雪雀 特別純米酒 純音｜商品情報",
        "url": "https://yukisuzume.com/product/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "yuki-sakura",
    "brandId": "brand-8",
    "kind": "sake",
    "nameJa": "雪雀 純米吟醸 さくらひめ",
    "nameKo": "유키스즈메 사쿠라히메",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "雪雀 純米吟醸 さくらひめ｜商品情報",
        "url": "https://yukisuzume.com/product/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": "さくらひめ",
    "attributes": []
  },
  {
    "id": "yuki-hiya",
    "brandId": "brand-8",
    "kind": "sake",
    "nameJa": "雪雀 純米吟醸ひやおろし",
    "nameKo": "유키스즈메 히야오로시",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "季節限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "雪雀 純米吟醸ひやおろし｜商品情報",
        "url": "https://yukisuzume.com/product/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "生詰"
    ]
  },
  {
    "id": "rinzen-dai",
    "brandId": "rinzen",
    "kind": "sake",
    "nameJa": "凛然 純米大吟醸 720ml",
    "nameKo": "린젠 준마이다이긴죠",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 15,
    "descriptionKo": "농약을 사용하지 않은 쌀로 빚는 제품. 품종은 미확인.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "凛然 純米大吟醸 720ml｜商品情報",
        "url": "https://sakurauzumaki.com/products",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": 50,
    "nihonshudo": 0.5,
    "acidity": 1.5,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "rinzen-ginjo",
    "brandId": "rinzen",
    "kind": "sake",
    "nameJa": "凛然 純米吟醸 720ml",
    "nameKo": "린젠 준마이긴죠",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [
      "720ml 항목에 정미율이 없어 다른 용량의 값을 옮기지 않았습니다."
    ],
    "sources": [
      {
        "title": "凛然 純米吟醸 720ml｜商品情報",
        "url": "https://sakurauzumaki.com/products",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": -1,
    "acidity": 1.7,
    "aminoAcidity": null,
    "yeast": "さくらひめ",
    "attributes": []
  },
  {
    "id": "rinzen-junmai",
    "brandId": "rinzen",
    "kind": "sake",
    "nameJa": "凛然 純米 720ml",
    "nameKo": "린젠 준마이",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "凛然 純米 720ml｜商品情報",
        "url": "https://sakurauzumaki.com/products",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": 70,
    "nihonshudo": 3,
    "acidity": 1.8,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "niki-dai",
    "brandId": "brand-10",
    "kind": "sake",
    "nameJa": "NIKITATSU 仁喜多津 純米大吟醸酒",
    "nameKo": "니키타츠 준마이다이긴죠",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 15.2,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "NIKITATSU 仁喜多津 純米大吟醸酒｜商品情報",
        "url": "https://minakuchi-shuzo.jp/products/nikitatsu-junmaidaiginjo",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": 35,
    "nihonshudo": -6,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "niki-ginjo",
    "brandId": "brand-10",
    "kind": "sake",
    "nameJa": "NIKITATSU 仁喜多津 純米吟醸酒",
    "nameKo": "니키타츠 준마이긴죠",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15.5,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "NIKITATSU 仁喜多津 純米吟醸酒｜商品情報",
        "url": "https://minakuchi-shuzo.jp/products/nikitatsu-junmaiginjo",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": 60,
    "nihonshudo": -5,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "niki-junmai",
    "brandId": "brand-10",
    "kind": "sake",
    "nameJa": "NIKITATSU 仁喜多津 純米酒",
    "nameKo": "니키타츠 준마이",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": 15.5,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "NIKITATSU 仁喜多津 純米酒｜商品情報",
        "url": "https://minakuchi-shuzo.jp/products/nikitatsu-junmai",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": 70,
    "nihonshudo": 3,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "niki-sakura",
    "brandId": "brand-10",
    "kind": "sake",
    "nameJa": "仁喜多津 純米吟醸酒 さくらひめ酵母",
    "nameKo": "니키타츠 사쿠라히메",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15.5,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "仁喜多津 純米吟醸酒 さくらひめ酵母｜商品情報",
        "url": "https://minakuchi-shuzo.jp/products/仁喜多津-純米吟醸酒-さくらひめ酵母",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 60,
    "nihonshudo": 0,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": "愛媛さくらひめ Type1",
    "attributes": []
  },
  {
    "id": "eiko-dai",
    "brandId": "brand-11",
    "kind": "sake",
    "nameJa": "酒仙栄光 Laugh With Sake 純米大吟醸 松山三井",
    "nameKo": "슈센에이코 마쓰야마미쓰이",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "酒仙栄光 Laugh With Sake 純米大吟醸 松山三井｜商品情報",
        "url": "https://eikoo.com/shop/products/list?category_id=1",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "eiko-dai-nama",
    "brandId": "brand-11",
    "kind": "sake",
    "nameJa": "酒仙栄光 Laugh with SAKE 純米大吟醸 松山三井 無濾過 生酒",
    "nameKo": "슈센에이코 마쓰야마미쓰이 나마",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "酒仙栄光 Laugh with SAKE 純米大吟醸 松山三井 無濾過 生酒｜商品情報",
        "url": "https://eikoo.com/shop/products/list?category_id=1",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過",
      "生酒"
    ]
  },
  {
    "id": "eiko-shizuku",
    "brandId": "brand-11",
    "kind": "sake",
    "nameJa": "酒仙栄光 Laugh With SAKE 純米吟醸 伊予しずく媛 無濾過生",
    "nameKo": "슈센에이코 이요 시즈쿠히메 나마",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "酒仙栄光 Laugh With SAKE 純米吟醸 伊予しずく媛 無濾過生｜商品情報",
        "url": "https://eikoo.com/shop/products/list?category_id=1",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "無濾過",
      "生酒"
    ]
  },
  {
    "id": "kyo-itto",
    "brandId": "brand-12",
    "kind": "sake",
    "nameJa": "京ひな 一刀両断 純米大吟醸辛口",
    "nameKo": "쿄히나 잇토료단",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "京ひな 一刀両断 純米大吟醸辛口｜商品情報",
        "url": "https://shop.sakaroku-syuzo.co.jp/c-item-detail?ic=250000",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": 50,
    "nihonshudo": "+8前後",
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "kyo-sakura",
    "brandId": "brand-12",
    "kind": "sake",
    "nameJa": "京ひな 純米吟醸 愛媛さくらひめ酵母 TYPE-3",
    "nameKo": "쿄히나 사쿠라히메 타입 3",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "京ひな 純米吟醸 愛媛さくらひめ酵母 TYPE-3｜商品情報",
        "url": "https://shop.sakaroku-syuzo.co.jp/c-item-detail?ic=255050",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 55,
    "nihonshudo": "+3前後",
    "acidity": null,
    "aminoAcidity": null,
    "yeast": "愛媛さくらひめ Type3",
    "attributes": []
  },
  {
    "id": "kyo-miyama",
    "brandId": "brand-12",
    "kind": "sake",
    "nameJa": "京ひな 深山 直汲み生原酒 特別純米",
    "nameKo": "쿄히나 미야마 직조 생원주",
    "nameKana": null,
    "category": "特別純米",
    "alcohol": 16,
    "descriptionKo": "공식 상품 목록에 소개된 特別純米 제품.",
    "availability": "季節限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "京ひな 深山 直汲み生原酒 特別純米｜商品情報",
        "url": "https://shop.sakaroku-syuzo.co.jp/c-item-detail?ic=26000B",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": 60,
    "nihonshudo": "-4前後",
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "生原酒"
    ]
  },
  {
    "id": "kame-hizo",
    "brandId": "brand-13",
    "kind": "sake",
    "nameJa": "千代の亀 純米大吟醸 秘蔵 しずく酒",
    "nameKo": "치요노카메 히조 시즈쿠자케",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "千代の亀 純米大吟醸 秘蔵 しずく酒｜商品情報",
        "url": "https://chiyonokame.shop-pro.jp/?pid=93151712",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "kame-ginga",
    "brandId": "brand-13",
    "kind": "sake",
    "nameJa": "千代の亀 純米大吟醸 銀河鉄道",
    "nameKo": "치요노카메 긴가테츠도",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "千代の亀 純米大吟醸 銀河鉄道｜商品情報",
        "url": "https://chiyonokame.shop-pro.jp/?pid=188337672",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "kame-shiboritate",
    "brandId": "brand-13",
    "kind": "sake",
    "nameJa": "千代の亀 純米しぼりたて",
    "nameKo": "치요노카메 준마이 시보리타테",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "季節限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [
      "「しぼりたて」 명칭만으로 생주 여부를 판정하지 않았습니다."
    ],
    "sources": [
      {
        "title": "千代の亀 純米しぼりたて｜商品情報",
        "url": "https://chiyonokame.shop-pro.jp/?mode=srh",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "kaze-sakura",
    "brandId": "brand-14",
    "kind": "sake",
    "nameJa": "風の里 純米吟醸酒 Sakura hime",
    "nameKo": "카제노사토 사쿠라히메",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 16,
    "descriptionKo": "은은한 꽃향과 맑은 맛을 소개하는 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "風の里 純米吟醸酒 Sakura hime｜商品情報",
        "url": "https://yoroshuzo.jp/lineup/sakurahime.php",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 50,
    "nihonshudo": -4,
    "acidity": 1.8,
    "aminoAcidity": null,
    "yeast": "ES-2 愛媛さくらひめ Type2 Clear",
    "attributes": []
  },
  {
    "id": "kaze-honjozo",
    "brandId": "brand-14",
    "kind": "sake",
    "nameJa": "風の里 本醸造酒",
    "nameKo": "카제노사토 혼죠조",
    "nameKana": null,
    "category": "本醸造",
    "alcohol": 16,
    "descriptionKo": "공식 상품 목록에 소개된 本醸造 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "風の里 本醸造酒｜商品情報",
        "url": "https://yoroshuzo.jp/lineup/honjozo.php",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 60,
    "nihonshudo": 9,
    "acidity": 1.5,
    "aminoAcidity": null,
    "yeast": "EK-1",
    "attributes": []
  },
  {
    "id": "kaze-junmai",
    "brandId": "brand-14",
    "kind": "sake",
    "nameJa": "風の里 純米酒",
    "nameKo": "카제노사토 준마이",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "風の里 純米酒｜商品情報",
        "url": "https://yoroshuzo.jp/lineup/junmai.php",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 60,
    "nihonshudo": 7,
    "acidity": 1.4,
    "aminoAcidity": null,
    "yeast": "EK-1",
    "attributes": []
  },
  {
    "id": "kaze-ginjo",
    "brandId": "brand-14",
    "kind": "sake",
    "nameJa": "風の里 純米吟醸酒",
    "nameKo": "카제노사토 준마이긴죠",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 16,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "風の里 純米吟醸酒｜商品情報",
        "url": "https://yoroshuzo.jp/lineup/junmaiginjo.php",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 50,
    "nihonshudo": 6,
    "acidity": 1.4,
    "aminoAcidity": null,
    "yeast": "EK-3",
    "attributes": []
  },
  {
    "id": "kaze-nigori",
    "brandId": "brand-14",
    "kind": "sake",
    "nameJa": "風の里 特別純米にごり酒",
    "nameKo": "카제노사토 특별준마이 니고리",
    "nameKana": null,
    "category": "特別純米",
    "alcohol": 16,
    "descriptionKo": "공식 상품 목록에 소개된 特別純米 제품.",
    "availability": "数量限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "風の里 特別純米にごり酒｜商品情報",
        "url": "https://yoroshuzo.jp/lineup/nigori.php",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 60,
    "nihonshudo": 7,
    "acidity": 1.3,
    "aminoAcidity": null,
    "yeast": "EK-1",
    "attributes": [
      "生酒",
      "にごり"
    ]
  },
  {
    "id": "kanogawa-junmai",
    "brandId": "kanogawa",
    "kind": "sake",
    "nameJa": "特別純米酒 叶川",
    "nameKo": "카노가와 특별준마이",
    "nameKana": null,
    "category": "特別純米",
    "alcohol": null,
    "descriptionKo": "가노가와 지역에서 이름을 얻었습니다. 부드러운 복숭아 계열 향과 산미를 소개합니다.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [
      "같은 공식 페이지 본문은 14.8도, 사양표는 15도로 불일치하여 도수를 비워 두었습니다."
    ],
    "sources": [
      {
        "title": "特別純米酒 叶川｜商品情報",
        "url": "https://yoroshuzo.jp/lineup/kanogawa.php",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": 60,
    "nihonshudo": -6,
    "acidity": 1.8,
    "aminoAcidity": null,
    "yeast": "EK-1",
    "attributes": [
      "原酒"
    ]
  },
  {
    "id": "kashin-junmai",
    "brandId": "brand-15",
    "kind": "sake",
    "nameJa": "純米酒 花神",
    "nameKo": "카신 준마이",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": "9–10",
    "descriptionKo": "분홍 효모의 색과 달콤한 맛이 특징인 저도수 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "純米酒 花神｜商品情報",
        "url": "https://uwanosake.stores.jp/items/602628646e84d52ca2c559b3",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": 80,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": "桃色酵母",
    "attributes": [
      "無濾過",
      "火入れ"
    ]
  },
  {
    "id": "chidori-arabashiri",
    "brandId": "chidori",
    "kind": "sake",
    "nameJa": "純米酒 千鳥 あらばしり",
    "nameKo": "치도리 아라바시리",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "純米酒 千鳥 あらばしり｜商品情報",
        "url": "https://uwanosake.com/product/chidori/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "chidori-seishu",
    "brandId": "chidori",
    "kind": "sake",
    "nameJa": "純米酒 千鳥 清酒",
    "nameKo": "치도리 세이슈",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "純米酒 千鳥 清酒｜商品情報",
        "url": "https://uwanosake.com/product/chidori/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "shiro-one",
    "brandId": "brand-16",
    "kind": "sake",
    "nameJa": "城川郷 尾根越えて",
    "nameKo": "시로카와고 오네코에테",
    "nameKana": null,
    "category": "特別純米",
    "alcohol": 15.1,
    "descriptionKo": "공식 상품 목록에 소개된 特別純米 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "城川郷 尾根越えて｜商品情報",
        "url": "https://shirokawagou.com/?page_id=637",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "麹：山田錦・しずく媛",
      "掛：媛育71号"
    ],
    "polishingRatio": "麹50%・掛58%",
    "nihonshudo": -2,
    "acidity": 1.5,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "shiro-ginjo",
    "brandId": "brand-16",
    "kind": "sake",
    "nameJa": "城川郷 純米吟醸",
    "nameKo": "시로카와고 준마이긴죠",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15.5,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "城川郷 純米吟醸｜商品情報",
        "url": "https://shirokawagou.com/?page_id=637",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 50,
    "nihonshudo": -1,
    "acidity": 1.45,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "shiro-dai",
    "brandId": "brand-16",
    "kind": "sake",
    "nameJa": "城川郷 純米大吟醸",
    "nameKo": "시로카와고 준마이다이긴죠",
    "nameKana": null,
    "category": "純米大吟醸",
    "alcohol": 15.5,
    "descriptionKo": "공식 상품 목록에 소개된 純米大吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "城川郷 純米大吟醸｜商品情報",
        "url": "https://shirokawagou.com/?page_id=637",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 40,
    "nihonshudo": 0,
    "acidity": 1.3,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "shiro-sakura",
    "brandId": "brand-16",
    "kind": "sake",
    "nameJa": "城川郷 さくらひめ 純米吟醸原酒",
    "nameKo": "시로카와고 사쿠라히메",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 13.6,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "城川郷 さくらひめ 純米吟醸原酒｜商品情報",
        "url": "https://shirokawagou.com/?page_id=637",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 50,
    "nihonshudo": 3,
    "acidity": 1.3,
    "aminoAcidity": null,
    "yeast": "さくらひめ",
    "attributes": [
      "原酒"
    ]
  },
  {
    "id": "shiro-nama",
    "brandId": "brand-16",
    "kind": "sake",
    "nameJa": "城川郷 生酒 純米原酒",
    "nameKo": "시로카와고 준마이 생원주",
    "nameKana": null,
    "category": "特別純米",
    "alcohol": 17.4,
    "descriptionKo": "공식 상품 목록에 소개된 特別純米 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "城川郷 生酒 純米原酒｜商品情報",
        "url": "https://shirokawagou.com/?page_id=637",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "麹：山田錦・しずく媛",
      "掛：媛育71号"
    ],
    "polishingRatio": "麹50%・掛58%",
    "nihonshudo": -2,
    "acidity": 1.5,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "生酒",
      "原酒"
    ]
  },
  {
    "id": "hosenbo",
    "brandId": "brand-17",
    "kind": "shochu",
    "nameJa": "宝泉坊",
    "nameKo": "호센보",
    "nameKana": null,
    "category": "はだか麦焼酎",
    "alcohol": 25,
    "ingredients": [
      "愛媛県産はだか麦",
      "白麹"
    ],
    "distillation": "常圧蒸留",
    "descriptionKo": "히메바야시의 증류주 제품입니다.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "媛囃子 商品案内",
        "url": "https://himebayashi.jp/products",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "okuri",
    "brandId": "brand-17",
    "kind": "shochu",
    "nameJa": "おくりおくら",
    "nameKo": "오쿠리오쿠라",
    "nameKana": null,
    "category": "栗焼酎",
    "alcohol": 25,
    "ingredients": [
      "栗",
      "米麹"
    ],
    "distillation": null,
    "descriptionKo": "히메바야시의 증류주 제품입니다.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "媛囃子 商品案内",
        "url": "https://himebayashi.jp/products",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "okuri-premium",
    "brandId": "brand-17",
    "kind": "shochu",
    "nameJa": "おくりおくらプレミアム",
    "nameKo": "오쿠리오쿠라 프리미엄",
    "nameKana": null,
    "category": "栗焼酎",
    "alcohol": 25,
    "ingredients": [
      "焼き栗",
      "米麹（黒麹）"
    ],
    "distillation": null,
    "descriptionKo": "히메바야시의 증류주 제품입니다.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "媛囃子 商品案内",
        "url": "https://himebayashi.jp/products",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "shunzan-ginjo",
    "brandId": "shunzan",
    "kind": "sake",
    "nameJa": "芳醸 春山-SHUNZAN- 純米吟醸",
    "nameKo": "호조 슌잔 준마이긴죠",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "芳醸 春山-SHUNZAN- 純米吟醸｜商品情報",
        "url": "https://www.meimon.co.jp/product/芳醸-春山ーshunzan－純米吟醸/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 50,
    "nihonshudo": -1,
    "acidity": 1.4,
    "aminoAcidity": null,
    "yeast": "愛媛さくらひめ Type3",
    "attributes": []
  },
  {
    "id": "tensha-aged",
    "brandId": "tensha",
    "kind": "sake",
    "nameJa": "熟成古酒 天赦",
    "nameKo": "숙성 고주 텐샤",
    "nameKana": null,
    "category": "熟成古酒",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 熟成古酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "熟成古酒 天赦｜商品情報",
        "url": "https://www.meimon.co.jp/product/tensha-720ml/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "shinju-junmai",
    "brandId": "shinju",
    "kind": "sake",
    "nameJa": "純米酒 真珠のときめき",
    "nameKo": "신주노토키메키 준마이",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": null,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "純米酒 真珠のときめき｜商品情報",
        "url": "https://www.meimon.co.jp/product/shinjunotokimeki-720ml/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "nobushi-honjozo",
    "brandId": "brand-19",
    "kind": "sake",
    "nameJa": "野武士 本醸造原酒",
    "nameKo": "노부시 혼죠조 원주",
    "nameKana": null,
    "category": "本醸造",
    "alcohol": 18,
    "descriptionKo": "공식 상품 목록에 소개된 本醸造 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [
      "正木酒店 판매 안내 기준. 양조장 조합 소개와 판매처의 제품 설명을 구분했습니다."
    ],
    "sources": [
      {
        "title": "正木酒店｜野武士 本醸造原酒",
        "url": "https://uwajimasaki.jp/野武士　本醸造原酒/",
        "type": "retailer",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": null,
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": [
      "原酒"
    ]
  },
  {
    "id": "nobushi-ginjo",
    "brandId": "brand-19",
    "kind": "sake",
    "nameJa": "野武士 純米吟醸",
    "nameKo": "노부시 준마이긴죠",
    "nameKana": null,
    "category": "純米吟醸",
    "alcohol": 15.4,
    "descriptionKo": "공식 상품 목록에 소개된 純米吟醸 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [
      "正木酒店 판매 안내 기준. 양조장 조합 소개와 판매처의 제품 설명을 구분했습니다."
    ],
    "sources": [
      {
        "title": "正木酒店｜野武士 純米吟醸",
        "url": "https://uwajimasaki.jp/野武士純米吟醸/",
        "type": "retailer",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "nobushi-funamae",
    "brandId": "brand-19",
    "kind": "sake",
    "nameJa": "野武士 槽前酒 吟醸",
    "nameKo": "노부시 후나마에슈 긴죠",
    "nameKana": null,
    "category": "吟醸",
    "alcohol": 17,
    "descriptionKo": "공식 상품 목록에 소개된 吟醸 제품.",
    "availability": "数量限定",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-09",
    "batch": null,
    "notes": [
      "正木酒店 판매 안내 기준. 양조장 조합 소개와 판매처의 제품 설명을 구분했습니다."
    ],
    "sources": [
      {
        "title": "正木酒店｜野武士 槽前酒 吟醸",
        "url": "https://uwajimasaki.jp/【数量限定】野武士　槽前酒　吟醸-2/",
        "type": "retailer",
        "accessedAt": "2026-09-09"
      }
    ],
    "rice": [
      "松山三井"
    ],
    "polishingRatio": null,
    "nihonshudo": null,
    "acidity": null,
    "aminoAcidity": null,
    "yeast": null,
    "attributes": []
  },
  {
    "id": "sakura-matsuyama",
    "brandId": "brand-9",
    "kind": "sake",
    "nameJa": "桜うづまき 純米酒 松山城 720ml",
    "nameKo": "사쿠라우즈마키 마쓰야마성",
    "nameKana": null,
    "category": "純米酒",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 純米酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-10",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "桜うづまき 純米酒 松山城 720ml｜商品情報",
        "url": "https://sakurauzumaki.com/products?cat_id=171",
        "type": "brewery-official",
        "accessedAt": "2026-09-10"
      }
    ],
    "rice": [
      "しずく媛"
    ],
    "polishingRatio": 60,
    "nihonshudo": 3,
    "acidity": 1.4,
    "aminoAcidity": null,
    "yeast": "EK-1",
    "attributes": []
  },
  {
    "id": "sakura-josen",
    "brandId": "brand-9",
    "kind": "sake",
    "nameJa": "桜うづまき 上撰 180ml",
    "nameKo": "사쿠라우즈마키 죠센",
    "nameKana": null,
    "category": "普通酒",
    "alcohol": 15,
    "descriptionKo": "공식 상품 목록에 소개된 普通酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-10",
    "batch": null,
    "notes": [],
    "sources": [
      {
        "title": "桜うづまき 上撰 180ml｜商品情報",
        "url": "https://sakurauzumaki.com/products?cat_id=172",
        "type": "brewery-official",
        "accessedAt": "2026-09-10"
      }
    ],
    "rice": null,
    "polishingRatio": 70,
    "nihonshudo": -1,
    "acidity": 1.1,
    "aminoAcidity": null,
    "yeast": "協会701号",
    "attributes": []
  },
  {
    "id": "sakura-nigori",
    "brandId": "brand-9",
    "kind": "sake",
    "nameJa": "桜うづまき にごり酒 1800ml",
    "nameKo": "사쿠라우즈마키 니고리",
    "nameKana": null,
    "category": "普通酒",
    "alcohol": 16,
    "descriptionKo": "공식 상품 목록에 소개된 普通酒 제품.",
    "availability": "不明",
    "festivalOffering": "unknown",
    "salesStatus": "listed",
    "specAsOf": "2026-09-10",
    "batch": null,
    "notes": [
      "1800ml 항목 기준입니다. 720ml 항목의 「아미노산도」 값을 산도로 바꾸어 쓰지 않았습니다."
    ],
    "sources": [
      {
        "title": "桜うづまき にごり酒 1800ml｜商品情報",
        "url": "https://sakurauzumaki.com/products?cat_id=172",
        "type": "brewery-official",
        "accessedAt": "2026-09-10"
      }
    ],
    "rice": null,
    "polishingRatio": 70,
    "nihonshudo": -25,
    "acidity": 1.2,
    "aminoAcidity": null,
    "yeast": "協会701号",
    "attributes": [
      "にごり"
    ]
  }
];
