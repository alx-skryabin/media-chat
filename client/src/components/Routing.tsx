import React from 'react'
import {Route, Routes,} from 'react-router-dom'
import Home from '../Pages/Home'
import Call from '../Pages/Call'
import Page404 from '../Pages/404'

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
