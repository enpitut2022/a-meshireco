import axios from "axios-jsonp-pro"

export type store = {
  name: string;
  open: string;
  close: string;
  price: string;
  map: string;
  hotpepper: string;
  image: string;
  category: string;
  latitude?: number;
  longitude?: number;
}

type HotPepperAPIStoreInfo = {
  access: string;
  address: string;
  band: string;
  barrier_free: string;
  budget: {
    average: string;
    code: string;
    name: string;
  };
  budget_memo: string;
  capacity: number;
  card: string;
  catch: string;
  charter: string;
  child: string;
  close: string;
  coupon_urls: {
    pc: string;
    sp: string;
  };
  course: string;
  english: string;
  free_drink: string;
  free_food: string;
  genre: {
    catch: string;
    code: string;
    name: string;
  },
  horigotatsu: string;
  id: string;
  karaoke: string;
  ktai_coupon: number;
  large_area: {
    code: string;
    name: string;
  },
  large_service_area: {
    code: string;
    name: string;
  },
  lat: number;
  lng: number;
  logo_image: string;
  lunch: string;
  middle_area: {
    code: string;
    name: string;
  },
  midnight: string;
  mobile_access: string;
  name: string;
  name_kana: string;
  non_smoking: string;
  open: string;
  other_memo: string;
  parking: string;
  party_capacity: number;
  pet: string;
  photo: {
    mobile: {
      l: string;
      s: string;
    },
    pc: {
      l: string;
      m: string;
      s: string;
    }
  },
  private_room: string;
  service_area: {
    code: string;
    name: string;
  },
  shop_detail_memo: string;
  show: string;
  small_area: {
    code: string;
    name: string;
  },
  station_name: string;
  tatami: string;
  tv: string;
  urls: {
    pc: string;
  };
  wedding: string;
  wifi: string;
}

type HotPepperAPIResponse = {
  results: {
    api_version: string;
    results_available: number;
    results_returned: string;
    results_start: number;
    shop: HotPepperAPIStoreInfo[];
  }
}

// Jsonからリストを返す
const getListByData = (res: HotPepperAPIResponse): store[] => {
  return res.results.shop.map((v): store => {
    return {
      name: v.name,
      open: v.open,
      close: v.close,
      price: v.budget.code,
      map: `https://www.google.com/maps?q=${v.lat},${v.lng}`,
      hotpepper: v.urls.pc,
      image: v.photo.pc.l,
      category: v.genre.name,
      latitude: v.lat,
      longitude: v.lng,
    }
  });
}

// 店リストを取得
export const getList = async (lat: number, lng: number, range: number = 3): Promise<store[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&format=jsonp`;
  const url = `${baseUrl}&lat=${lat}&lng=${lng}&range=${range}&count=100`;

  const res = await axios.jsonp(url) as HotPepperAPIResponse

  return getListByData(res);
}

