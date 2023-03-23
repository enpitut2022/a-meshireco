import React, { useMemo, useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import Store from '@/components/store'
import Stack from '@mui/material/Stack';
import '@/index.css'
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import { store, getList } from './getStoreList'
import PlaceIcon from '@mui/icons-material/Place';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

// 受け取ったリストをシャッフルする
const shuffleArray = <T,>([...array]: T[]): T[] => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const cards = () => {
  const [storeList, setStoreList] = useState<store[]>([])
  const [displayedStoreIndex, setDisplayedStoreIndex] = useState(0);

  useEffect(() => {
    const func = async () => {
      let lat: number
      let lng: number
      navigator.geolocation.getCurrentPosition(async (p) => {
        console.log(p.coords.latitude, p.coords.longitude)
        lat = p.coords.latitude
        lng = p.coords.longitude
        const list = await getList(lat, lng)
        setStoreList(shuffleArray(list))
        setDisplayedStoreIndex(list.length - 1)
      });
    }
    func()
  }, [])

  const childRef = useMemo<any>(
    () =>
      Array(storeList.length).fill(0).map((i) => React.createRef()),
    [storeList.length]
  )

  return (
    <>
      <IconButton
        size="small"
        color="warning"
        onClick={() => {
          window.open(storeList[displayedStoreIndex].map, '_blank');
        }}
      >
        <PlaceIcon />ナビ
      </IconButton>
      <IconButton
        size="small"
        color="warning"
        onClick={() => {
          window.open(storeList[displayedStoreIndex].hotpepper, '_blank');
        }}
      >
        <LocalDiningIcon />くわしく
      </IconButton>

      <Stack
        className='cards'
        direction="row"
        justifyContent="center"
        spacing={1}
      >
        <IconButton
          size="small"
          color="warning"
          onClick={() => {
            window.location.reload();
            setDisplayedStoreIndex(storeList.length - 1);
          }}
        >
          <ReplayIcon />もう一度探す
        </IconButton>
        {
          storeList.map((store, index) => (
            // @ts-ignore
            <TinderCard
              className='card'
              // TODO リストのリバースをせずcssで実装したい
              // style = {{zIndex: - index}}
              ref={childRef[index]}
              key={index}
              onSwipe={() => { }}
              onCardLeftScreen={() => setDisplayedStoreIndex(prev => prev - 1)}
            >
              <Store
                name={store.name}
                open={store.open}
                close={store.close}
                price={store.price}
                map={store.map}
                hotpepper={store.hotpepper}
                image={store.image}
                category={store.category}
              ></Store>
            </TinderCard>
          ))
        }
      </Stack>
    </>
  )
}

export default cards;
