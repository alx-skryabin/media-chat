import React, {useEffect} from 'react'
import ButtonLogOut from './ButtonLogOut'
import FormLogIn from './FormLogIn'
import useUser from '../hooks/useUser'
import useSocket from '../hooks/useSocket'
import {EVENT} from '../socket/config.socket'
import {useAppDispatch} from '../hooks/redux.hooks'
import {setDataUser} from '../store/slices/systemSlice'

const LogIn = () => {
  const socket = useSocket()
  const {user, uuid, setUser, removeUser} = useUser()
  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.on(EVENT.SIGN_IN_REFRESH, ({name, uuid}: any) => {
      setUser(name, uuid)
      dispatch(setDataUser({name, uuid}))
    })

    if (user && uuid) {
      socket.emit(EVENT.SIGN_IN_REFRESH, {
        name: user,
        id: uuid
      })
    }
    return () => {
      socket.off(EVENT.SIGN_IN_REFRESH)
    }
  }, [socket])

  return (
    <>
      <h1>
        Hello, {user || 'guest'}!
        {user && <ButtonLogOut removeUser={removeUser}/>}
      </h1>
      {!user && <FormLogIn setUser={setUser}
      />}
    </>
  )
}

export default LogIn
