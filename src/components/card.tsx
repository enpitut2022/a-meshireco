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
          //@ts-ignore
          <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>  
            <Store
              name={store.name}
              text={store.text}
            ></Store>
          </TinderCard>
        ))

        // <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
        //     <Store
        //       name={storeList[0].name}
        //       text={storeList[0].text} 
        //     ></Store>
        // </TinderCard>
    )
}

export default card;

