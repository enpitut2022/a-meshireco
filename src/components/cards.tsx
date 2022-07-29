import React, { useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import Store from './store'
import Stack from '@mui/material/Stack';
import '../index.css'
import './tmpStoreList'
import Button from '@mui/material/Button'

//--------------------------------------------------------------
//
// 店のデータを手動で調整できる
// コメントアウトして切り替えられる
//
//--------------------------------------------------------------

// つくばの店ごっちゃデータ
// import {tmpStoreList, store} from './tmpStoreList'

// 大学の昼休みに行けそうな店のデータ
import { tmpStoreList, store } from './tmpTsukubaLunchList'

//--------------------------------------------------------------

const storeList: Array<store> = tmpStoreList



// 受け取ったリストをシャッフルする
const shuffleArray = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const storeListShaffled: Array<store> = shuffleArray(storeList)

// リストの先頭が下に来てしまうため逆順にしておく
const storeListRiverse: Array<store> = storeListShaffled.reverse()

let displayedStoreIndex: number = storeListRiverse.length-1

const GetStoreMapData = (index: number) => {
  return storeListRiverse[index].map
}

const GetStoreDetailData = (index: number) => {
  return storeListRiverse[index].tabeLog
}

const cards = () => {

  const childRef = useMemo<any>(
    () =>
      Array(storeList.length).fill(0).map((i) => React.createRef()),
    [storeList.length]
  )

  // @ts-ignore
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  // @ts-ignore
  const onCardLeftScreen = (myIdentifier) => {
    //console.log(myIdentifier + ' left the screen')
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
      <Button 
        className = 'reloadButton'
        onClick={() => {
          window.location.reload();
          displayedStoreIndex = storeListRiverse.length-1;
        }}
      >
        更新
      </Button>
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
              openTime={store.openTime}
              closeTime={store.closeTime}
              price={store.price}
              map={store.map}
              tabeLog={store.tabeLog}
              image={store.image}
              category={store.category}

            ></Store>
          </TinderCard>
        ))
      }
      <Button
        onClick={() => {
          window.location.href = GetStoreMapData(displayedStoreIndex);
        }}
      >
        GoogleMap
      </Button>
      <Button
        onClick={() => {
          window.location.href = GetStoreDetailData(displayedStoreIndex);
        }}
      >
        食べログ
      </Button>
    </Stack>
    
    /* </div > */ 
  )
}

export default cards;
