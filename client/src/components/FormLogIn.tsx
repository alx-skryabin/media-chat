import React, {useEffect, useState} from 'react'
import {Input} from 'antd'
import {EVENT} from '../socket/config.socket'
import useSocket from '../hooks/useSocket'
import {useAppDispatch} from '../hooks/redux.hooks'
import {setDataUser} from '../store/slices/systemSlice'

interface IFormLogIn {
  setUser: (name: string, uuid: string) => void
}

export default function FormLogIn({setUser}: IFormLogIn) {
  const socket = useSocket()
  const dispatch = useAppDispatch()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    socket.on(EVENT.SIGN_IN, ({name, room, uuid}: any) => {
      console.log('SIGN_IN: ', name, room, uuid)
      setUser(name, uuid)
      dispatch(setDataUser({name, uuid}))
      setInputValue('')
    })

    return () => {
      socket.off(EVENT.SIGN_IN)
    }
  }, [socket])

  const submitForm = (e: React.FormEvent): void => {
    e.preventDefault()
    if (!inputValue.trim()) return
    socket.emit(EVENT.SIGN_IN, {
      name: inputValue
    })
  }

  const handlerInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={submitForm}>
      <Input
        placeholder="Your name"
        style={{width: '200px'}}
        value={inputValue}
        onChange={handlerInput}
      />
      <p><small>Enter you name, please!</small></p>
    </form>
  )
}
