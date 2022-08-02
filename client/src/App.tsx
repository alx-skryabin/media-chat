import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navigation from './components/Navigation'
import Routing from './components/Routing'
import {Provider} from 'react-redux'
import initSocket from './socket/init.socket'
import {Context} from './Context'
import {store} from './store/store'
import './App.scss'

function App() {
  console.log(111)

  return (
    <Provider store={store}>
      <Context.Provider value={initSocket()}>
        <BrowserRouter>
          <Navigation/>
          <Routing/>
        </BrowserRouter>
      </Context.Provider>
    </Provider>
  )
}

export default App
