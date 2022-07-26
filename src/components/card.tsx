import TinderCard from 'react-tinder-card'
import Store from './store'

// ...
interface store {
  name: string;
  text: string;
}

const card = () => {
    const storeList: Array<store> = [
      {name: '粉とクリーム', text: 'aaa'},
      {name: 'むじゃき', text: 'bbb'},
    ]

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
        storeList.map((store) => (
          <TinderCard
            // className='swipe'
            // key={store.name}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('fooBar')}
            preventSwipe={['right', 'left']}
          >
            <Store
              name={store.name}
              text={store.text}
            ></Store>
          </TinderCard>
        ))

        // <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
        //     <Store
        //       name={storeList[0]}
        //       text={storeList[1]} 
        //     ></Store>
        // </TinderCard>
    )
}

export default card;

