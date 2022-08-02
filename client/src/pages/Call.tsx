import React from 'react'
import useSocket from '../hooks/useSocket'
import {Button} from 'antd'
import {EVENT} from '../socket/config.socket'

const Call = () => {
  const socket = useSocket()

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
    </div>
  )
}

export default Call
