import React, { useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import Store from './store'
import '../index.css'
import './tmpStoreList'
import {tmpStoreList, store} from './tmpStoreList'

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
