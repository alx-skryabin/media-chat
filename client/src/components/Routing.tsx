import React from 'react'
import {Route, Routes,} from 'react-router-dom'
import Home from '../pages/Home'
import Call from '../pages/Call'
import Page404 from '../pages/404'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/call" element={<Call/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
  )
}

export default Routing
