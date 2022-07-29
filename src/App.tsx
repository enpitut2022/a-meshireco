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
