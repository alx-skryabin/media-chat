import React, {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import useSocket from '../hooks/useSocket'
import {Tabs} from 'antd'
import {EVENT} from '../socket/config.socket'
import {useAppDispatch} from '../hooks/redux.hooks'
import {setUsersList} from '../store/slices/systemSlice'
import DebugButtons from './DebugButtons/DebugButtons'

function Navigation() {
  let location = useLocation()
  const socket = useSocket()
  const dispatch = useAppDispatch()

  useEffect(() => {
    socket.on(EVENT.DEBUG, ({data, type}: any) => {
      console.dir(`DEBUG_${type}`, data)
    })

    socket.on(EVENT.USER_LIST, (data: any) => {
      dispatch(setUsersList(data))
    })

    return () => {
      socket.off(EVENT.DEBUG)
      socket.off(EVENT.USER_LIST)
    }
  }, [socket])

  return (
    <>
      <Tabs defaultActiveKey={location.pathname} centered>
        <Tabs.TabPane tab={<Link to="/">Home</Link>} key="/"/>
        {/*<Tabs.TabPane tab={<Link to="/call">Call</Link>} key="/call"/>*/}
      </Tabs>
      <DebugButtons/>
    </>
  )
}

export default Navigation
