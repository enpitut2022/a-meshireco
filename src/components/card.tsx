import TinderCard from 'react-tinder-card'

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
        <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
    )
}

export default card;

