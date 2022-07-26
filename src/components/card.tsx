import TinderCard from 'react-tinder-card'
import Store from './store'

// ...

const card = () => {
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
        <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
            <Store></Store>
        </TinderCard>
    )
}

export default card;

