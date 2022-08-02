import React, {useEffect, useState} from 'react'
import {EVENT} from '../socket/config.socket'
import {Input} from 'antd'
import useSocket from '../hooks/useSocket'
import Call from './Call'

const Home = () => {
  const socket = useSocket()
  const [msg, setMsg] = useState('guest')
  const [value, setValue] = useState('')

  useEffect(() => {
    socket.on(EVENT.SIGN_IN, ({message}: any) => {
      console.log('SIGN_IN', message)
      setMsg(message)
      setValue('')
    })

    return () => {
      socket.off(EVENT.SIGN_IN)
    }
  }, [socket])

  const submitForm = (e: React.FormEvent): void => {
    e.preventDefault()
    if (!value.trim()) return
    socket.emit(EVENT.SIGN_IN, {name: value})
  }

  const handlerInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <div className="App">
      <h1>Hello, {msg}!</h1>
      <form onSubmit={submitForm}>
        <Input
          placeholder="Your name"
          style={{width: '200px'}}
          value={value}
          onChange={handlerInput}
        />
        <p><small>Enter you name, please!</small></p>
      </form>
      <Call/>
    </div>
  )
}

export default Home
