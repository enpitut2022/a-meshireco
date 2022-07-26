import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Store from './components/store'
function App() {

  return (
    <div className="App">
      <h1>メシレコ</h1>
      <Store></Store>
    </div>
  )
}

export default App
