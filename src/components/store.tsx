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

// // ジャンル一覧
// // インデックスがID
// const categoryList: Array<string> = [
//   '居酒屋',
//   'カフェ',
//   'ファミレス',
//   '麺類',
//   '学食',
//   '中華',
//   'イタリアン',
//   'フレンチ',
//   '和食',
// ]

// 価格帯一覧
// インデックスがID
const priceRangeList = {
  B001: '~1000',
  B002: '2001 ~ 3000',
  B003: '3001 ~ 4000',
  B004: '5001 ~ 7000',
  B005: '7001 ~ 10000'
}

// 開店時間はnumberで保持しているので文字列に整形
const timeToString = (time: number) => {
	var hour = Math.trunc(time)
  var minute: any = Math.trunc(60 * (time - hour))
  if (minute == 0) {
    minute = '00'
  }
  var stringTime = hour + ':' + minute
	return stringTime;
}

// @ts-ignore
const store = (props: StoreProps) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>開店時間：{timeToString(props.openTime)} ~ {timeToString(props.closeTime)}</p>
      {/* <p>価格帯：{priceRangeList[props.price]}円</p> */}
      <p>
        <a href = {props.map}>GoogleMap</a>
      </p>
      <p>
        <a href = {props.tabeLog}>食べログ</a>
      </p>
      {/* <p>ジャンル：{categoryList[props.category]}</p> */}
      <img src = {props.image}/>
    </div>
  )
};

export default store;
