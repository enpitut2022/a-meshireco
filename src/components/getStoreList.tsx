// APIで店リストを取得する
import axios from '../lib/axios';
// @ts-ignore
import axiosJsonpAdapter from "axios-jsonp";

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

// 古いやつ
// interface StoreProps {
//   name: string;
//   openTime: number;
//   closeTime: number;
//   price: string;
//   map: string;
//   tabeLog: string;
//   image: string;
//   category: number;
// }

// 緯度経度からGoogleMapのURL生成
const getGoogleMapUrl = (latitude: number, longitude: number): string => {
  const url = 'https://www.google.com/maps?q=' + latitude + ',' + longitude;
  return url;
}

// 現在地で検索URLを生成
const getUrlByLocation = (latitude: number, longitude: number, range: number = 3, url: string): string => {
  url += '&lat=' + latitude + '&lng=' + longitude + '&range=' + range;
  return url;
}

// URLを指定してAPIデータを受け取る
// @ts-ignore
const getDataByUrl = async (url: string) => {
  const config = {
    adapter: axiosJsonpAdapter,
  }

  const res = await axios.get(`${url}&format=jsonp`, config)
  return res.data
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

// リストを取得
export const getList = async (lat: number, lng: number, range: number = 3): Promise<Array<store>> => {
  // テスト現在地
  // const latitude: number = 36.1100309
  // const longitude: number = 140.1013173
  // const defaultRange: number = 3

  // URLを生成
  const apiKey = import.meta.env.VITE_API_KEY;
  var url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + apiKey;

  url = getUrlByLocation(lat, lng, range, url)
  const data = await getDataByUrl(url)
  const storeList = await getListByData(data)

  return storeList
}

