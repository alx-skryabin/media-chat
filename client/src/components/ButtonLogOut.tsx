import React from 'react'
import {Button, Tooltip} from 'antd'
import {useAppDispatch, useAppSelector} from '../hooks/redux.hooks'
import {setDataUser} from '../store/slices/systemSlice'
import useSocket from '../hooks/useSocket'
import {EVENT} from '../socket/config.socket'

interface IButtonLogOut {
  removeUser: () => void
}

export default function ButtonLogOut({removeUser}: IButtonLogOut) {
  const dispatch = useAppDispatch()
  const socket = useSocket()
  let {user} = useAppSelector(state => state.system)

  const handleLogOt = () => {
    socket.emit(EVENT.LOG_OUT, {
      id: user ? user.uuid : ''
    })
    removeUser()
    dispatch(setDataUser(false))
  }

  return (
    <Tooltip title="Log out">
      <Button
        type="primary"
        size="small"
        style={{
          borderRadius: '3px',
          marginLeft: '15px'
        }}
        onClick={handleLogOt}
      >
        <i className="fa-solid fa-arrow-right-from-bracket"/>
      </Button>
    </Tooltip>
  )
}
