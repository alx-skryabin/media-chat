import React from 'react'
import LogIn from '../components/LogIn'
import ButtonStartCall from '../components/ButtonStartCall/ButtonStartCall'
import UsersList from '../components/UsersList/UsersList'

const Home = () => {
  return (
    <div className="App">
      <LogIn/>
      <ButtonStartCall/>
      <UsersList/>
    </div>
  )
}

export default Home
