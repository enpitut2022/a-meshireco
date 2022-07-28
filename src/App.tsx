import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import Cards from './components/cards'
import {getList} from './components/getStoreList'

function App() {
  getList()

  return (
    <div className = 'App'>
      <Header></Header>
      <Cards></Cards>
    </div>
  )
}

export default App
