import React, { useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import Store from './store'
import '../index.css'

interface store {
  name: string;
  text: string;
}

const storeList: Array<store> = [
  { name: '粉とクリーム', text: 'aaa' },
  { name: 'むじゃき', text: 'bbb' },
]

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
              text = {store.text}
            ></Store>
          </TinderCard>
      ))}
    </div>
  )
}

export default cards;
