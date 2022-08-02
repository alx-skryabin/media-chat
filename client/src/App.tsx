import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navigation from './components/Navigation'
import Routing from './components/Routing'
import {Context} from './Context'
import initSocket from './socket/init.socket'
import './App.scss'

function App() {
  console.log(22222)

  return (
    <Context.Provider value={initSocket()}>
      <BrowserRouter>
        <Navigation/>
        <Routing/>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
