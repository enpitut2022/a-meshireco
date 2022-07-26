import React, { useRef, useMemo } from 'react'
import TinderCard from 'react-tinder-card'
import Store from './store'
import './card.css'
import store from './store';

// ...
interface store {
  name: string;
  text: string;
}

const card = () => {

  const storeList: Array<store> = [
    { name: '粉とクリーム', text: 'aaa' },
    { name: 'むじゃき', text: 'bbb' },
  ]

  const childRef = useMemo<any>(
    () =>
      Array(storeList.length).fill(0).map((i) => React.createRef()),
    [storeList.length]
  )


  //@ts-ignore
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  //@ts-ignore
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  return (
    //@ts-ignore
    <div class="st">
      {storeList.map((store, index) => (
        //@ts-ignore
        <TinderCard
          class="tinderCard"
          ref={childRef[index]}
          key={index}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen('fooBar')}
          preventSwipe={['right', 'left']}>
          <Store
            name={store.name}
            text={store.text}
          ></Store>
        </TinderCard>
      ))}
    </div>

    // <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
    //     <Store
    //       name={storeList[0].name}
    //       text={storeList[0].text} 
    //     ></Store>
    // </TinderCard>
  )
}

export default card;

