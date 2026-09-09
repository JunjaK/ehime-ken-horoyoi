import type { Brewery, Brand } from './types.ts';

/** 公式資料の確認日。現行ロット・在庫の保証ではない。 */
export const ACCESSED_AT = '2026-09-09';
export const PRODUCERS: Brewery[] = [
  {
    "id": "umenishiki",
    "nameJa": "梅錦山川株式会社",
    "nameKana": "うめにしきやまかわ",
    "nameKo": "우메니시키야마카와",
    "founded": 1872,
    "region": "東予",
    "cityJa": "四国中央市",
    "cityKo": "시코쿠추오시",
    "address": "愛媛県四国中央市金田町金川14",
    "lat": 33.989258,
    "lng": 133.594177,
    "location": {
      "precision": "locality",
      "label": "愛媛県四国中央市金田町金川１４番地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E5%9B%9B%E5%9B%BD%E4%B8%AD%E5%A4%AE%E5%B8%82%E9%87%91%E7%94%B0%E7%94%BA%E9%87%91%E5%B7%9D14",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://www.umenishiki.com/",
    "descriptionKo": "현대 설비를 활용하면서 양조인의 감각을 중시합니다. 호오산계의 물로 술을 빚습니다.",
    "brewingFeatures": [],
    "water": "法皇山系 복류수",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜梅錦山川株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/2/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "kondo",
    "nameJa": "近藤酒造株式会社",
    "nameKana": "こんどうしゅぞう",
    "nameKo": "곤도주조",
    "founded": 1878,
    "region": "東予",
    "cityJa": "新居浜市",
    "cityKo": "니이하마시",
    "address": "愛媛県新居浜市新須賀町1-11-46",
    "lat": 33.966316,
    "lng": 133.288254,
    "location": {
      "precision": "locality",
      "label": "愛媛県新居浜市新須賀町一丁目１１番４６号",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E6%96%B0%E5%B1%85%E6%B5%9C%E5%B8%82%E6%96%B0%E9%A0%88%E8%B3%80%E7%94%BA1-11-46",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://www.kondousyuzou.com/",
    "descriptionKo": "니이하마에 자리한 양조장입니다. 지역 쌀 마쓰야마미쓰이와 깊은 우물물을 활용합니다.",
    "brewingFeatures": [],
    "water": "지하 110m 우물물",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜近藤酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/3/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "ishizuchi",
    "nameJa": "石鎚酒造株式会社",
    "nameKana": "いしづちしゅぞう",
    "nameKo": "이시즈치주조",
    "founded": 1920,
    "region": "東予",
    "cityJa": "西条市",
    "cityKo": "사이조시",
    "address": "愛媛県西条市氷見丙402-3",
    "lat": 33.891342,
    "lng": 133.130768,
    "location": {
      "precision": "locality",
      "label": "愛媛県西条市氷見丙４０２番地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E8%A5%BF%E6%9D%A1%E5%B8%82%E6%B0%B7%E8%A6%8B%E4%B8%99402-3",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://www.ishizuchi.co.jp/",
    "descriptionKo": "가족 중심으로 식중주를 빚습니다. 상자 누룩과 저온 장기 발효로 맑은 맛과 산미를 추구합니다.",
    "brewingFeatures": [],
    "water": "양조장 우물의 이시즈치산계 초연수",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜石鎚酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/5/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      },
      {
        "title": "石鎚酒造株式会社 公式",
        "url": "https://www.ishizuchi.co.jp/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "shuto",
    "nameJa": "首藤酒造株式会社",
    "nameKana": "しゅとうしゅぞう",
    "nameKo": "슈토주조",
    "founded": 1901,
    "region": "東予",
    "cityJa": "西条市",
    "cityKo": "사이조시 고마쓰초",
    "address": "愛媛県西条市小松町大頭甲312-2",
    "lat": 33.88261,
    "lng": 133.075226,
    "location": {
      "precision": "locality",
      "label": "愛媛県西条市小松町大頭甲２６２番地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E8%A5%BF%E6%9D%A1%E5%B8%82%E5%B0%8F%E6%9D%BE%E7%94%BA%E5%A4%A7%E9%A0%AD%E7%94%B2312-2",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://sukigokoro.co.jp/",
    "descriptionKo": "가족이 소량씩 빚는 양조장입니다. 에히메와 서일본의 여러 쌀 품종을 제품별로 사용합니다.",
    "brewingFeatures": [],
    "water": "이시즈치산계 우물물",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜首藤酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/6/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "takeda",
    "nameJa": "武田酒造株式会社",
    "nameKana": "たけだしゅぞう",
    "nameKo": "다케다주조",
    "founded": 1904,
    "region": "東予",
    "cityJa": "西条市",
    "cityKo": "사이조시 미요시",
    "address": "愛媛県西条市三芳1507",
    "lat": 33.949074,
    "lng": 133.057755,
    "location": {
      "precision": "locality",
      "label": "愛媛県西条市三芳１５０７番地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E8%A5%BF%E6%9D%A1%E5%B8%82%E4%B8%89%E8%8A%B31507",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://www.yamatogokoro.co.jp/",
    "descriptionKo": "일본심과 히메이치에를 빚는 양조장입니다. 야마하이와 주머니 압착 등 제품에 맞춘 양조를 이어갑니다.",
    "brewingFeatures": [],
    "water": null,
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜武田酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/7/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "seiryo",
    "nameJa": "成龍酒造株式会社",
    "nameKana": "せいりょうしゅぞう",
    "nameKo": "세이료주조",
    "founded": 1877,
    "region": "東予",
    "cityJa": "西条市",
    "cityKo": "사이조시 슈",
    "address": "愛媛県西条市周布1301-1",
    "lat": 33.913174,
    "lng": 133.078323,
    "location": {
      "precision": "locality",
      "label": "愛媛県西条市周布１３０１番地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E8%A5%BF%E6%9D%A1%E5%B8%82%E5%91%A8%E5%B8%831301-1",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://www.seiryosyuzo.com/brands/iyokagiya",
    "descriptionKo": "지역 쌀과 물로 이요카기야를 빚습니다. 무여과 정규 제품과 계절 한정 제품을 구분해 소개합니다.",
    "brewingFeatures": [],
    "water": "이시즈치산 복류수·약연수",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜成龍酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/8/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      },
      {
        "title": "成龍酒造株式会社 公式",
        "url": "https://www.seiryosyuzo.com/brands/iyokagiya",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "yagi",
    "nameJa": "株式会社八木酒造部",
    "nameKana": "やぎしゅぞうぶ",
    "nameKo": "야기주조부",
    "founded": 1831,
    "region": "東予",
    "cityJa": "今治市",
    "cityKo": "이마바리시",
    "address": "愛媛県今治市旭町3-3-8",
    "lat": 34.060318,
    "lng": 133.002686,
    "location": {
      "precision": "locality",
      "label": "愛媛県今治市旭町三丁目３番",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E4%BB%8A%E6%B2%BB%E5%B8%82%E6%97%AD%E7%94%BA3-3-8",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://www.yamatan.jp/",
    "descriptionKo": "이마바리의 양조장입니다. 지역 쌀을 사용하며 냉장 설비로 양조 환경을 관리합니다.",
    "brewingFeatures": [],
    "water": "소자강(蒼社川) 복류수",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜株式会社八木酒造部",
        "url": "https://www.ehime-syuzou.com/kuramoto/9/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "yukisuzume",
    "nameJa": "雪雀酒造株式会社",
    "nameKana": "ゆきすずめしゅぞう",
    "nameKo": "유키스즈메주조",
    "founded": 1915,
    "region": "中予",
    "cityJa": "松山市",
    "cityKo": "마쓰야마시 호조",
    "address": "愛媛県松山市柳原123",
    "lat": 33.956669,
    "lng": 132.770889,
    "location": {
      "precision": "locality",
      "label": "愛媛県松山市柳原",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E6%9D%BE%E5%B1%B1%E5%B8%82%E6%9F%B3%E5%8E%9F123",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://yukisuzume.com/",
    "descriptionKo": "누룩 만들기를 중시하는 양조장입니다. 중경수를 사용해 가벼우면서도 맛의 골격이 있는 술을 지향합니다.",
    "brewingFeatures": [],
    "water": "중경수",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜雪雀酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/11/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "sakurauzumaki",
    "nameJa": "桜うづまき酒造株式会社",
    "nameKana": "さくらうづまきしゅぞう",
    "nameKo": "사쿠라우즈마키주조",
    "founded": 1871,
    "region": "中予",
    "cityJa": "松山市",
    "cityKo": "마쓰야마시 하탄지",
    "address": "愛媛県松山市八反地甲71",
    "lat": 33.965263,
    "lng": 132.791641,
    "location": {
      "precision": "locality",
      "label": "愛媛県松山市八反地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E6%9D%BE%E5%B1%B1%E5%B8%82%E5%85%AB%E5%8F%8D%E5%9C%B0%E7%94%B271",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://sakurauzumaki.com/",
    "descriptionKo": "마쓰야마 호조 지역에 자리합니다. 지역 쌀을 중심으로 빚으며 린젠 등의 제품군을 전개합니다.",
    "brewingFeatures": [],
    "water": "다카나와산계 복류수",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜桜うづまき酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/12/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "minakuchi",
    "nameJa": "水口酒造株式会社",
    "nameKana": "みなくちしゅぞう",
    "nameKo": "미나쿠치주조",
    "founded": 1895,
    "region": "中予",
    "cityJa": "松山市",
    "cityKo": "마쓰야마시 도고",
    "address": "愛媛県松山市道後喜多町3-23",
    "lat": 33.851429,
    "lng": 132.782654,
    "location": {
      "precision": "locality",
      "label": "愛媛県松山市道後喜多町３番２３号",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E6%9D%BE%E5%B1%B1%E5%B8%82%E9%81%93%E5%BE%8C%E5%96%9C%E5%A4%9A%E7%94%BA3-23",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://www.dogobeer.co.jp/",
    "descriptionKo": "도고온천 본관이 세워진 이듬해 창업했습니다. 도고의 양조장으로 니키타츠와 도고 맥주 등을 만듭니다.",
    "brewingFeatures": [],
    "water": null,
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜水口酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/13/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "eiko",
    "nameJa": "栄光酒造株式会社",
    "nameKana": "えいこうしゅぞう",
    "nameKo": "에이코주조",
    "founded": 1897,
    "region": "中予",
    "cityJa": "松山市",
    "cityKo": "마쓰야마시",
    "address": "愛媛県松山市溝辺町甲443",
    "lat": 33.84964,
    "lng": 132.803238,
    "location": {
      "precision": "locality",
      "label": "愛媛県松山市溝辺町甲３３１番地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E6%9D%BE%E5%B1%B1%E5%B8%82%E6%BA%9D%E8%BE%BA%E7%94%BA%E7%94%B2443",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://eikoo.com/",
    "descriptionKo": "마쓰야마 미조노베에 자리합니다. 슈센에이코를 비롯해 다양한 제품을 빚습니다.",
    "brewingFeatures": [],
    "water": "다카나와산계 유가후치(湧ヶ淵) 물",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜栄光酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/14/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "sakaroku",
    "nameJa": "酒六酒造株式会社",
    "nameKana": "さかろくしゅぞう",
    "nameKo": "사카로쿠주조",
    "founded": 1920,
    "region": "南予",
    "cityJa": "喜多郡内子町",
    "cityKo": "우치코정",
    "address": "愛媛県喜多郡内子町内子3279-1",
    "lat": 33.551735,
    "lng": 132.647873,
    "location": {
      "precision": "locality",
      "label": "愛媛県内子町内子",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E5%96%9C%E5%A4%9A%E9%83%A1%E5%86%85%E5%AD%90%E7%94%BA%E5%86%85%E5%AD%903279-1",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://sakaroku-syuzo.co.jp/",
    "descriptionKo": "여덟 양조업자의 합병으로 출발했습니다. 우치코의 목조 양조장에서 수작업 중심으로 술을 빚습니다.",
    "brewingFeatures": [],
    "water": "오다미야마에서 오다강으로 이어지는 수계",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜酒六酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/22/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "chiyonokame",
    "nameJa": "千代の亀酒造株式会社",
    "nameKana": "ちよのかめしゅぞう",
    "nameKo": "치요노카메주조",
    "founded": 1716,
    "region": "南予",
    "cityJa": "喜多郡内子町",
    "cityKo": "우치코정",
    "address": "愛媛県喜多郡内子町平岡甲1592-1",
    "lat": 33.535622,
    "lng": 132.658905,
    "location": {
      "precision": "locality",
      "label": "愛媛県内子町平岡甲１１１４番地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E5%96%9C%E5%A4%9A%E9%83%A1%E5%86%85%E5%AD%90%E7%94%BA%E5%B9%B3%E5%B2%A1%E7%94%B21592-1",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://www.chiyonokame.com/",
    "descriptionKo": "우치코의 쌀농사와 함께하는 양조장입니다. 전통적인 주조 압착과 숙성 제품을 이어갑니다.",
    "brewingFeatures": [],
    "water": null,
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜千代の亀酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/23/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "yoro",
    "nameJa": "養老酒造株式会社",
    "nameKana": "ようろうしゅぞう",
    "nameKo": "요로주조",
    "founded": 1921,
    "region": "南予",
    "cityJa": "大洲市",
    "cityKo": "오즈시 히지카와초",
    "address": "愛媛県大洲市肱川町山鳥坂49",
    "lat": 33.471447,
    "lng": 132.716309,
    "location": {
      "precision": "locality",
      "label": "愛媛県大洲市肱川町山鳥坂",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E5%A4%A7%E6%B4%B2%E5%B8%82%E8%82%B1%E5%B7%9D%E7%94%BA%E5%B1%B1%E9%B3%A5%E5%9D%8249",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://yoroshuzo.jp/",
    "descriptionKo": "히지카와 산간의 야마토사카에서 술을 빚습니다. 2006년부터 3대가 직접 양조를 맡았습니다. 2018년 수해 뒤 2019년 1월 양조를 재개했습니다.",
    "brewingFeatures": [],
    "water": "지하 약 10m 히지카와 복류수·연수",
    "rice": [
      "しずく媛",
      "松山三井"
    ],
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜養老酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/24/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      },
      {
        "title": "養老酒造株式会社 公式",
        "url": "https://yoroshuzo.jp/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      },
      {
        "title": "養老酒造 沿革",
        "url": "https://yoroshuzo.jp/profile.php",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      },
      {
        "title": "養老酒造 酒造り",
        "url": "https://yoroshuzo.jp/style.php",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "utsunomiya",
    "nameJa": "宇都宮酒造株式会社",
    "nameKana": "うつのみやしゅぞう",
    "nameKo": "우쓰노미야주조",
    "founded": 1910,
    "region": "南予",
    "cityJa": "西予市",
    "cityKo": "세이요시 우와정",
    "address": "愛媛県西予市宇和町卯之町4-254-1",
    "lat": 33.360722,
    "lng": 132.518463,
    "location": {
      "precision": "locality",
      "label": "愛媛県西予市宇和町卯之町四丁目２５４番地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E8%A5%BF%E4%BA%88%E5%B8%82%E5%AE%87%E5%92%8C%E7%94%BA%E5%8D%AF%E4%B9%8B%E7%94%BA4-254-1",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://uwanosake.com/",
    "descriptionKo": "분홍 효모로 카신을 빚습니다. 시바 료타로의 허락을 얻어 소설 「花神」의 이름을 붙였습니다.",
    "brewingFeatures": [],
    "water": "주모에 간논수(観音水), 양조장 연수 우물",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜宇都宮酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/utsunomiya/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "nakashiro",
    "nameJa": "中城本家酒造合名会社",
    "nameKana": "なかしろほんけしゅぞう",
    "nameKo": "나카시로혼케주조",
    "founded": 1898,
    "region": "南予",
    "cityJa": "西予市",
    "cityKo": "세이요시 조카와정",
    "address": "愛媛県西予市城川町嘉喜尾1319",
    "lat": 33.398457,
    "lng": 132.745117,
    "location": {
      "precision": "locality",
      "label": "愛媛県西予市城川町嘉喜尾",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E8%A5%BF%E4%BA%88%E5%B8%82%E5%9F%8E%E5%B7%9D%E7%94%BA%E5%98%89%E5%96%9C%E5%B0%BE1319",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://shirokawagou.com/",
    "descriptionKo": "시로카와의 산간 양조장입니다. 지역 쌀과 샘물로 부드러운 술을 지향합니다.",
    "brewingFeatures": [],
    "water": "양조장 뒷산 샘물",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜中城本家酒造合名会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/31/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "himebayashi",
    "nameJa": "株式会社媛囃子",
    "nameKana": "ひめばやし",
    "nameKo": "히메바야시",
    "founded": 1941,
    "region": "南予",
    "cityJa": "西予市",
    "cityKo": "세이요시 조카와정",
    "address": "愛媛県西予市城川町魚成4598",
    "lat": 33.370178,
    "lng": 132.714279,
    "location": {
      "precision": "locality",
      "label": "愛媛県西予市城川町魚成",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E8%A5%BF%E4%BA%88%E5%B8%82%E5%9F%8E%E5%B7%9D%E7%94%BA%E9%AD%9A%E6%88%904598",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://himebayashi.jp/",
    "descriptionKo": "청주가 아닌 소주 전문 제조사입니다. 밤 소주를 개발했으며 에히메의 밤과 쌀보리를 활용합니다.",
    "brewingFeatures": [],
    "water": null,
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜株式会社媛囃子",
        "url": "https://www.ehime-syuzou.com/kuramoto/33/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "meimon",
    "nameJa": "名門サカイ株式会社",
    "nameKana": "めいもんさかい",
    "nameKo": "메이몬사카이",
    "founded": 1592,
    "region": "南予",
    "cityJa": "宇和島市",
    "cityKo": "우와지마시",
    "address": "愛媛県宇和島市高串2-1045",
    "lat": 33.255302,
    "lng": 132.562286,
    "location": {
      "precision": "locality",
      "label": "愛媛県宇和島市高串２番地",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E5%AE%87%E5%92%8C%E5%B3%B6%E5%B8%82%E9%AB%98%E4%B8%B22-1045",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://www.meimon.co.jp/",
    "descriptionKo": "우와지마 다테 가문과의 역사를 소개하는 양조장입니다. 준마이 제품과 숙성 고주 등 여러 제품군을 전개합니다.",
    "brewingFeatures": [],
    "water": null,
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜名門サカイ株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/34/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "masaki",
    "nameJa": "有限会社正木正光酒造場",
    "nameKana": "まさきまさみつしゅぞうじょう",
    "nameKo": "마사키마사미쓰주조장",
    "founded": 1905,
    "region": "南予",
    "cityJa": "北宇和郡松野町",
    "cityKo": "마쓰노정",
    "address": "愛媛県北宇和郡松野町大字松丸178",
    "lat": 33.226795,
    "lng": 132.711411,
    "location": {
      "precision": "locality",
      "label": "愛媛県松野町松丸",
      "source": {
        "title": "国土地理院 住所検索（地域代表点）",
        "url": "https://msearch.gsi.go.jp/address-search/AddressSearch?q=%E6%84%9B%E5%AA%9B%E7%9C%8C%E5%8C%97%E5%AE%87%E5%92%8C%E9%83%A1%E6%9D%BE%E9%87%8E%E7%94%BA%E5%A4%A7%E5%AD%97%E6%9D%BE%E4%B8%B8178",
        "type": "government",
        "accessedAt": "2026-09-09"
      }
    },
    "officialUrl": "https://uwajimasaki.jp/",
    "descriptionKo": "마쓰노 마쓰마루의 양조장입니다. 노부시는 창업 무렵 키우던 투우의 이름에서 유래합니다.",
    "brewingFeatures": [],
    "water": "창업자가 판 가로 우물·시만토강 상류 수계",
    "rice": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜有限会社正木正光酒造場",
        "url": "https://www.ehime-syuzou.com/kuramoto/35/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  }
];

/** festival2026 は指定された参加名簿への掲載。その他は不参加の断定ではない。 */
export const BRANDS: Brand[] = [
  {
    "id": "brand-1",
    "breweryId": "umenishiki",
    "nameJa": "梅錦",
    "nameKana": "うめにしき",
    "nameKo": "우메니시키",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜梅錦山川株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/2/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-2",
    "breweryId": "kondo",
    "nameJa": "華姫桜",
    "nameKana": "はなひめざくら",
    "nameKo": "하나히메자쿠라",
    "aliases": [
      "はなひめさくら"
    ],
    "festival2026": true,
    "lineupNote": "참가 명칭의 읽기는 요청 표기 「はなひめざくら」를 유지했습니다. 조합 표기 「はなひめさくら」도 검색됩니다.",
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜近藤酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/3/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-3",
    "breweryId": "ishizuchi",
    "nameJa": "石鎚",
    "nameKana": "いしづち",
    "nameKo": "이시즈치",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜石鎚酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/5/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-4",
    "breweryId": "shuto",
    "nameJa": "寿喜心",
    "nameKana": "すきごころ",
    "nameKo": "스키고코로",
    "aliases": [
      "壽㐂心"
    ],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜首藤酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/6/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-5",
    "breweryId": "takeda",
    "nameJa": "日本心",
    "nameKana": "やまとごころ",
    "nameKo": "야마토고코로",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜武田酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/7/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-6",
    "breweryId": "seiryo",
    "nameJa": "伊予賀儀屋",
    "nameKana": "いよかぎや",
    "nameKo": "이요카기야",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜成龍酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/8/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-7",
    "breweryId": "yagi",
    "nameJa": "山丹正宗",
    "nameKana": "やまたんまさむね",
    "nameKo": "야마탄마사무네",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜株式会社八木酒造部",
        "url": "https://www.ehime-syuzou.com/kuramoto/9/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-8",
    "breweryId": "yukisuzume",
    "nameJa": "雪雀",
    "nameKana": "ゆきすずめ",
    "nameKo": "유키스즈메",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜雪雀酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/11/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-9",
    "breweryId": "sakurauzumaki",
    "nameJa": "桜うづまき",
    "nameKana": "さくらうづまき",
    "nameKo": "사쿠라우즈마키",
    "aliases": [
      "さくらうずまき"
    ],
    "festival2026": true,
    "lineupNote": "린젠은 같은 양조장의 별도 제품군으로 표시합니다.",
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜桜うづまき酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/12/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-10",
    "breweryId": "minakuchi",
    "nameJa": "仁喜多津",
    "nameKana": "にきたつ",
    "nameKo": "니키타츠",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜水口酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/13/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-11",
    "breweryId": "eiko",
    "nameJa": "酒仙栄光",
    "nameKana": "しゅせんえいこう",
    "nameKo": "슈센에이코",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜栄光酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/14/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-12",
    "breweryId": "sakaroku",
    "nameJa": "京ひな",
    "nameKana": "きょうひな",
    "nameKo": "쿄히나",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜酒六酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/22/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-13",
    "breweryId": "chiyonokame",
    "nameJa": "千代の亀",
    "nameKana": "ちよのかめ",
    "nameKo": "치요노카메",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜千代の亀酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/23/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-14",
    "breweryId": "yoro",
    "nameJa": "風の里",
    "nameKana": "かぜのさと",
    "nameKo": "카제노사토",
    "aliases": [],
    "festival2026": true,
    "lineupNote": "공식 라인업과 판매 링크를 2026-09-09 확인했습니다. 재고·2026년 가을 출하일은 미확인입니다. 연혁에 5월 신주·9월 히야오로시 행사를 안내하지만 2026 행사나 개별 히야오로시 사양은 확인되지 않았습니다. 「叶川」는 별도 브랜드입니다.",
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜養老酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/24/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-15",
    "breweryId": "utsunomiya",
    "nameJa": "花神",
    "nameKana": "かしん",
    "nameKo": "카신",
    "aliases": [],
    "festival2026": true,
    "lineupNote": "공식 확인된 「花神」는 1종입니다. 용량 변형을 별도 제품으로 늘리지 않았으며 「千鳥」는 같은 양조장의 다른 브랜드입니다.",
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜宇都宮酒造株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/utsunomiya/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-16",
    "breweryId": "nakashiro",
    "nameJa": "城川郷",
    "nameKana": "しろかわごう",
    "nameKo": "시로카와고",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜中城本家酒造合名会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/31/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-17",
    "breweryId": "himebayashi",
    "nameJa": "媛囃子",
    "nameKana": "ひめばやし",
    "nameKo": "히메바야시 (밤 소주)",
    "aliases": [],
    "festival2026": true,
    "lineupNote": "참가 명칭 「媛囃子」 아래 제조사의 소주 라인업을 소개합니다.",
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜株式会社媛囃子",
        "url": "https://www.ehime-syuzou.com/kuramoto/33/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-18",
    "breweryId": "meimon",
    "nameJa": "名門",
    "nameKana": "めいもん",
    "nameKo": "메이몬",
    "aliases": [],
    "festival2026": true,
    "lineupNote": "참가 명칭 「名門」과 다른 라벨인 「春山」「天赦」「真珠のときめき」는 별도 브랜드로 연결했습니다.",
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜名門サカイ株式会社",
        "url": "https://www.ehime-syuzou.com/kuramoto/34/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "brand-19",
    "breweryId": "masaki",
    "nameJa": "野武士",
    "nameKana": "のぶし",
    "nameKo": "노부시",
    "aliases": [],
    "festival2026": true,
    "lineupNote": null,
    "sources": [
      {
        "title": "愛媛県酒造協同組合｜有限会社正木正光酒造場",
        "url": "https://www.ehime-syuzou.com/kuramoto/35/",
        "type": "ehime-sake-association",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "rinzen",
    "breweryId": "sakurauzumaki",
    "nameJa": "凛然",
    "nameKana": "りんぜん",
    "nameKo": "린젠",
    "aliases": [],
    "festival2026": false,
    "lineupNote": null,
    "sources": [
      {
        "title": "凛然 商品案内",
        "url": "https://sakurauzumaki.com/products",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "kanogawa",
    "breweryId": "yoro",
    "nameJa": "叶川",
    "nameKana": "かのがわ",
    "nameKo": "카노가와",
    "aliases": [],
    "festival2026": false,
    "lineupNote": null,
    "sources": [
      {
        "title": "叶川 商品案内",
        "url": "https://yoroshuzo.jp/lineup/kanogawa.php",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "chidori",
    "breweryId": "utsunomiya",
    "nameJa": "千鳥",
    "nameKana": "ちどり",
    "nameKo": "치도리",
    "aliases": [],
    "festival2026": false,
    "lineupNote": null,
    "sources": [
      {
        "title": "千鳥 商品案内",
        "url": "https://uwanosake.com/product/chidori/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "shunzan",
    "breweryId": "meimon",
    "nameJa": "芳醸 春山",
    "nameKana": null,
    "nameKo": "호조 슌잔",
    "aliases": [],
    "festival2026": false,
    "lineupNote": null,
    "sources": [
      {
        "title": "芳醸 春山 商品案内",
        "url": "https://www.meimon.co.jp/product/芳醸-春山ーshunzan－純米吟醸/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "tensha",
    "breweryId": "meimon",
    "nameJa": "天赦",
    "nameKana": "てんしゃ",
    "nameKo": "텐샤",
    "aliases": [],
    "festival2026": false,
    "lineupNote": null,
    "sources": [
      {
        "title": "天赦 商品案内",
        "url": "https://www.meimon.co.jp/product/tensha-720ml/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  },
  {
    "id": "shinju",
    "breweryId": "meimon",
    "nameJa": "真珠のときめき",
    "nameKana": null,
    "nameKo": "신주노토키메키",
    "aliases": [],
    "festival2026": false,
    "lineupNote": null,
    "sources": [
      {
        "title": "真珠のときめき 商品案内",
        "url": "https://www.meimon.co.jp/product/shinjunotokimeki-720ml/",
        "type": "brewery-official",
        "accessedAt": "2026-09-09"
      }
    ]
  }
];
