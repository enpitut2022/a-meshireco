import React, { useMemo, useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import Store from './store'
import Stack from '@mui/material/Stack';
import '../index.css'
import './tmpStoreList'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';

//--------------------------------------------------------------
//
// 店のデータを手動で調整できる
// コメントアウトして切り替えられる
//
//--------------------------------------------------------------

// テスト用店ごっちゃデータ
// import {storeList as tmpStoreList, store} from './tmpStoreList'

// 大学の昼休みに行けそうな店のデータ
// import {storeList, store} from './tmpTsukubaLunchList'

// ホットペッパーAPIでデータを取得
import { store, getList } from './getStoreList'

//--------------------------------------------------------------

// 受け取ったリストをシャッフルする
const shuffleArray = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let displayedStoreIndex: number = 0
let storeListRiverseCopy: store[] = []

export const GetStoreMapData = () => {
  return storeListRiverseCopy[displayedStoreIndex].map
}

export const GetStoreDetailData = () => {
  return storeListRiverseCopy[displayedStoreIndex].hotpepper
}

const cards = () => {
  const [storeList, setStoreList] = useState<store[]>([])
  const [storeListRiverse, setStoreListRiverse] = useState<store[]>([])

  useEffect(() => {
    const func = async () => {
      let lat: number
      let lng: number
      // @ts-ignore
      navigator.geolocation.getCurrentPosition(async (p) => {
        console.log(p.coords.latitude, p.coords.longitude)
        lat = p.coords.latitude
        lng = p.coords.longitude
        let list: Array<store> = await getList(lat, lng)
        setStoreList(list)
        displayedStoreIndex = list.length - 1
        list = shuffleArray(list)
        list = list.reverse() // リストの先頭が下に来てしまうため逆順にしておく
        setStoreListRiverse(list)
        storeListRiverseCopy = list
      });
    }
    func()
  }, [])

  const childRef = useMemo<any>(
    () =>
      Array(storeList.length).fill(0).map((i) => React.createRef()),
    [storeList.length]
  )

  // @ts-ignore
  const onSwipe = () => {}

  // @ts-ignore
  const onCardLeftScreen = (myIdentifier) => {
    displayedStoreIndex--
  }
  
  return (
    // <div className='cards'>
    <Stack
      className='cards'
      direction="row"
      justifyContent="center"
      spacing={1}
    >
      <IconButton
        size="small"
        color = "warning"
        onClick={() => {
          window.location.reload();
          displayedStoreIndex = storeListRiverse.length - 1;
        }}
      >
        <ReplayIcon />もう一度探す
      </IconButton>
      {
        storeListRiverse.map((store, index) => (
          // @ts-ignore
          <TinderCard
            className='card'
            // TODO リストのリバースをせずcssで実装したい
            // style = {{zIndex: - index}}
            ref={childRef[index]}
            key={index}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['right', 'left', 'down']}>
            <Store
              name={store.name}
              open={store.open}
              close={store.close}
              price={store.price}
              map={store.map}
              hotpepper={store.hotpepper}
              image={store.image}
              category={store.category}
            ></Store>
          </TinderCard>
        ))
      }
    </Stack>
  )
}

export default cards;
