import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Store from './components/store'
import Card from './components/card'

function App() {

  return (
    <div className="App">
      <h1>メシレコ</h1>
      <Card></Card>
    </div>
  )
}

export default App
