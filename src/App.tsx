import { useState, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import Cards from './components/cards'

function App() {
  const [isAvailable, setAvailable] = useState(false);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0});

  const isFirstRef = useRef(true);

  useEffect(() => {
    isFirstRef.current = false;
    getCurrentPosition();
    if ('geolocation' in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = () => {
    console.log('位置情報を取得しました');
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    });
  };

const R = Math.PI / 180;

const distance = (lat1: number, lng1: number, lat2: number, lng2: number)  => {
  lat1 = R;
  lng1= R;
  lat2 = R;
  lng2= R;
  return 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2));
}

  return (
    <div className = 'App'>
      <div>
        {isAvailable && (
          <div>
            <button onClick={getCurrentPosition}>Get Current Position</button>
            <div>
              latitude: {position.latitude}
              <br />
              longitude: {position.longitude}
            </div>
          </div>
        )}
      </div>
      <Header></Header>
      <Cards></Cards>
    </div>
  )
}

export default App
