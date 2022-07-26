import React, { useRef, useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import Store from './store'
import '../index.css'
import store from './store';

// ...
interface store {
  name: string;
  text: string;
}

const storeList: Array<store> = [
  { name: '粉とクリーム', text: 'aaa' },
  { name: 'むじゃき', text: 'bbb' },
]

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
      {storeList.map((store, index) => (
        <div className = 'card' style = {{zIndex: - index}}>
          <TinderCard
            className='tinderCard'
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
        </div>
      ))}
    </div>
  )
}

export default cards;
