// APIで店リストを取得する
import axios from 'axios';
import xml2js from 'xml2js';

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
const getGoogleMapUrl = (latitude: number, longitude: number) => {
	url = 'https://www.google.com/maps?q=' + latitude + ',' + longitude;
	return url;
}

// URLを生成
const apiKey = import.meta.env.VITE_API_KEY;
var url = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=' + apiKey;

// 現在地で検索
const getUrlByLocation = (latitude: number, longitude: number, range: number = 3, url: string) => {
	url += '&lat=' + latitude + '&lng=' + longitude + '&range=' + range;
	return url;
}

// URLを指定してJsonデータを受け取る
const fetchXml = async (url: string) => {
	// XMLデータをJsonに変換する処理
  const config = {
    // responseType: 'document', 'document'はブラウザ環境以外ではtextと同じ
    transformResponse: [(data) => {
      let jsonData;
      const parser = new xml2js.Parser({
        async: false,
        explicitArray: false
      });
      parser.parseString(data, (error, json) => {
        jsonData = json;
      });
      return jsonData;
    }],
  };
  return await axios.get(url, config);
};

// Jsonからリストを返す
const getListByUrl = async (data) => {
	var storeList: Array<store>

	// jsonデータをリストに格納
	for (var storeData in data[results][shop]) {
		var store: store
		store.name = storeData.name
		store.open = storeData.open
		store.close = storeData.close
		store.price = storeData.budget.code
		store.map = getGoogleMapUrl(Number(storeData.lat), Number(storeData.lng))
		store.hotpepper = storeData.urls.pc
		store.image = storeData.pc.l
		store.category = storeData.genre.name
		store.latitude = storeData.lat
		store.longitude = storeData.lng
		storeList.push(store)
	}

	return storeList
}

// リストを取得
fetchXml()
  .then(response => console.log(JSON.stringify(response.data, null, 2)))
  .catch(e => console.error(e));
