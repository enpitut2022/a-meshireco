import React, { useMemo, useState, useEffect, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import Store from './store'
import '../index.css'
import './tmpStoreList'

//--------------------------------------------------------------
//
// 店のデータを手動で調整できる
// コメントアウトして切り替えられる
//
//--------------------------------------------------------------

// つくばの店ごっちゃデータ
import {tmpStoreList, store} from './tmpStoreList'

// 大学の昼休みに行けそうな店のデータ
// import {tmpStoreList, store} from './tmpTsukubaLunchList'

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
    console.log(myIdentifier + ' left the screen')
  }

  
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const isFirstRef = useRef(true);

  useEffect(() => {
    isFirstRef.current = false;
    getCurrentPosition();
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = () => {
    console.log('位置情報を取得しました');
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };

  const R = Math.PI / 180;

  const distance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
    lat1 = R;
    lng1 = R;
    lat2 = R;
    lng2 = R;
    return 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2));
  }

  return (
    <div className='cards'>
      
      {storeListRiverse.map((store, index) => (
        
          //distance({position.latitude}, {position.longitude}, {store.latitude}, {store.longitude})
        
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
            latitude={store.latitude || 0}
            longitude={store.longitude || 0}
          ></Store>
        </TinderCard>
      ))}
    </div>
  )
}

export default cards;
