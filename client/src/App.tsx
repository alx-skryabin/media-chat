import React, {useEffect, useState} from 'react'
import {io} from 'socket.io-client'
import {defineHostURI} from './utils'
import {EVENT} from './socket/config.socket'
import {Input} from 'antd'
import './App.scss'

const socket = io(defineHostURI(), {})

function App() {
  const [msg, setMsg] = useState('guest')
  const [value, setValue] = useState('')

  useEffect(() => {
    socket.on(EVENT.SIGN_IN, ({message}) => {
      console.log('SIGN_IN', message)
      setMsg(message)
      setValue('')
    })

    return () => {
      socket.off(EVENT.SIGN_IN)
    }
  }, [])

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
    </div>
  )
}

export default App
