import React from 'react'
import {Button, Space} from 'antd'
import {EVENT} from '../../socket/config.socket'
import useSocket from '../../hooks/useSocket'

const DebugButtons = () => {
  const socket = useSocket()

  return (
      <Space style={{
        position: 'absolute',
        top: '10px',
        left: '10px'
      }}>
        <Button size="small" onClick={() => socket.emit(EVENT.DEBUG, {type: 'USER'})}>user</Button>
        <Button size="small" onClick={() => socket.emit(EVENT.DEBUG, {type: 'ROOM'})}>room</Button>
        <Button size="small" onClick={() => socket.emit(EVENT.DEBUG, {type: 'CLEAR'})}>clear</Button>
      </Space>
  )
}

export default DebugButtons
