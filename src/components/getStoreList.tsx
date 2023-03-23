// APIで店リストを取得する
// import axios from '@/lib/axios';
import axios from "axios-jsonp-pro"
import store from "./store";

// storeインタフェースの定義
export interface store {
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

// 緯度経度からGoogleMapのURL生成
const getGoogleMapUrl = (latitude: number, longitude: number): string => {
  const url = 'https://www.google.com/maps?q=' + latitude + ',' + longitude;
  return url;
}

// Jsonからリストを返す
// @ts-ignore
const getListByData = async (data) => {
  var storeList: Array<store> = []
  // jsonデータをリストに格納
  for (var storeData of data.results.shop) {
    var store: store = {
      // @ts-ignore
      name: storeData.name,
      // @ts-ignore
      open: storeData.open,
      // @ts-ignore
      close: storeData.close,
      // @ts-ignore
      price: storeData.budget.code,
      // @ts-ignore
      map: getGoogleMapUrl(Number(storeData.lat), Number(storeData.lng)),
      // @ts-ignore
      hotpepper: storeData.urls.pc,
      // @ts-ignore
      image: storeData.photo.pc.l,
      // @ts-ignore
      category: storeData.genre.name,
      // @ts-ignore
      latitude: storeData.lat,
      // @ts-ignore
      longitude: storeData.lng
    }
    // @ts-ignore
    storeList.push(store)
  }

  // @ts-ignore
  return storeList
}

// 店リストを取得
export const getList = async (lat: number, lng: number, range: number = 3): Promise<store[]> => {
  // const apiKey = import.meta.env.VITE_APP_KEY;
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&format=jsonp`;
  const url = `${baseUrl}&lat=${lat}&lng=${lng}&range=${range}&count=100`;

  const res = await axios.jsonp(url)
  console.info({ res })

  const storeList = await getListByData(res)

  return storeList;
}

