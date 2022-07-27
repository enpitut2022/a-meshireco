import React, { useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import Store from './store'
import '../index.css'

interface store {
  name: string;
  openTime: string;
  closeTime: string;
  price: number; // 3->3000 ~ 4000
  map: string;
  tabeLog: string;
  image: string;
  category: number; // 0->居酒屋, 1->カフェ, 2->チェーン, 
}

const storeList: Array<store> = [
  { name: '粉とクリーム', openTime: '8:00', closeTime: '12:00', price: 1, map: 'https://goo.gl/maps/3x1kDyuCGGpPbAxH8', tabeLog: 'url', image: "https://kosei.sec.tsukuba.ac.jp/wp-content/uploads/P1050398.jpg", category: 1 },
  { name: '粉とクリーム2', openTime: '17:00', closeTime: '24:00', price: 2, map: 'url', tabeLog: 'url', image: "https://kosei.sec.tsukuba.ac.jp/wp-content/uploads/P1050398.jpg", category: 2 },
]

// リストの先頭が下に来てしまうため逆順にしておく
const storeListRiverse: Array<store> = storeList.reverse()

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

  return (
    <div className='cards'>
      {storeListRiverse.map((store, index) => (
          // @ts-ignore
          <TinderCard
            className='card'
            // TODO リストのリバースをせずcssで実装したい
            // style = {{zIndex: - index}}
            ref = {childRef[index]}
            key = {index}
            onSwipe = {onSwipe}
            onCardLeftScreen = {() => onCardLeftScreen('fooBar')}
            preventSwipe = {['right', 'left', 'down']}>
            <Store
              name = {store.name}
              openTime = {store.openTime}
              closeTime = {store.closeTime}
              price = {store.price}
              map = {store.map}
              tabeLog = {store.tabeLog}
              image = {store.image}
              category = {store.category}
            ></Store>
          </TinderCard>
      ))}
    </div>
  )
}

export default cards;
