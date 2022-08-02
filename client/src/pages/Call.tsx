import React from 'react'
import useSocket from '../hooks/useSocket'
import {Button} from 'antd'
import {EVENT} from '../socket/config.socket'
import {useAppDispatch, useAppSelector} from '../hooks/redux.hooks'
import {anyHandler} from '../store/slices/systemSlice'

const Call = () => {
  const socket = useSocket()
  let {number} = useAppSelector(state => state.system)
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      <h1>Page, call</h1>
      <Button
        type="primary"
        onClick={() => {
          const time: string = new Date().getTime().toString()
          socket.emit(EVENT.SIGN_IN, {name: time})
        }}
      >
        Primary Button
      </Button>
      <br/><br/>
      <Button
        danger
        onClick={() => dispatch(anyHandler({number: ++number}))}
      >
        {number}
      </Button>
    </div>
  )
}

export default Call
