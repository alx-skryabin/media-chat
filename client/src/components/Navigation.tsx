import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Tabs} from 'antd'
import {useAppSelector} from '../hooks/redux.hooks'

function Navigation() {
  let location = useLocation()
  let {number} = useAppSelector(state => state.system)

  return (
    <Tabs defaultActiveKey={location.pathname} centered>
      <Tabs.TabPane tab={<Link to="/">Home</Link>} key="/"/>
      <Tabs.TabPane tab={<Link to="/call">Call {number}</Link>} key="/call"/>
    </Tabs>
  )
}

export default Navigation
