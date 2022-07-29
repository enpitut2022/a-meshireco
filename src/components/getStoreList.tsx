// APIで店リストを取得する
import axios from '../lib/axios';
// @ts-ignore
import axiosJsonpAdapter from "axios-jsonp";
// import xml2js from 'xml2js';

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
const getDataByUrl = async (url: string): Promise<string> => {
  const config = {
    adapter: axiosJsonpAdapter,
  }

  const res = await axios.get(url, config)
  console.log(res)
  return res.data
}

// XMLをJsonに変換
// const xmlToJson = (xmlData: string) => {
//   let jsonData;
//   const parser = new xml2js.Parser({
//     async: false,
//     explicitArray: false
//   });
//   parser.parseString(xmlData, (error, json) => {
//     jsonData = json;
//   });
//   return jsonData;
// }

// Jsonからリストを返す
// @ts-ignore
const getListByData = async (jsonData) => {
  var storeList: Array<store>

  // jsonデータをリストに格納
  for (var storeData in jsonData.results.shop) {
    var store: store
    // @ts-ignore
    store.name = storeData.name
    // @ts-ignore
    store.open = storeData.open
    // @ts-ignore
    store.close = storeData.close
    // @ts-ignore
    store.price = storeData.budget.code
    // @ts-ignore
    store.map = getGoogleMapUrl(Number(storeData.lat), Number(storeData.lng))
    // @ts-ignore
    store.hotpepper = storeData.urls.pc
    // @ts-ignore
    store.image = storeData.pc.l
    // @ts-ignore
    store.category = storeData.genre.name
    // @ts-ignore
    store.latitude = storeData.lat
    // @ts-ignore
    store.longitude = storeData.lng
    // @ts-ignore
    storeList.push(store)
  }

  // @ts-ignore
  return storeList
}

// リストを取得
export const getList = () => {
  // テスト現在地
  const latitude: number = 36.1100309
  const longitude: number = 140.1013173
  const range: number = 3

  // URLを生成
  const apiKey = import.meta.env.VITE_API_KEY;
  var url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + apiKey;

  url = getUrlByLocation(latitude, longitude, range, url)
  console.log({ url })
  getDataByUrl(url)
  // var xmlRes = getDataByUrl(url)
  // console.log(xmlRes)
  // @ts-ignore
  // var jsonRes = xmlToJson(xmlRes)

}

