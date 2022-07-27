interface StoreProps {
  name: string;
  openTime: string;
  closeTime: string;
  price: number;
  map: string;
  tabeLog: string;
  image: string;
  category: number;
  latitude: number;
  longitude: number;
}

//ジャンル一覧
//インデックスがID
const categoryList: Array<string> = [
  '居酒屋',
  'カフェ',
  'ファミレス',
  '麺類',
  '学食',
  '中華',
  'イタリアン',
  'フレンチ',
  '和食',
]

//価格帯一覧
//インデックスがID
const priceRangeList: Array<string> = [
  '0~999',
  '1000~1999',
  '2000~2999',
  '3000~3999',
  '4000~4999',
  '5000~5999',
  '6000~6999',
  '7000~7999',
  '8000~8999',
  '9000~9999',
]

// @ts-ignore
const store = (props: StoreProps) => {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>開店時間：{props.openTime} ~ {props.closeTime}</p>
      <p>価格帯：{priceRangeList[props.price]}</p>
      <p>
        <a href = {props.map}>GoogleMap</a>
      </p>
      <p>
        <a href = {props.tabeLog}>食べログ</a>
      </p>
      <p>ジャンル：{categoryList[props.category]}</p>
      <img src = {props.image}/>
    </div>
  )
};

export default store;
