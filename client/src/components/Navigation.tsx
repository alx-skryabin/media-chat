import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Tabs} from 'antd'

function Navigation() {
  let location = useLocation()

  return (
    <Tabs defaultActiveKey={location.pathname} centered>
      <Tabs.TabPane tab={<Link to="/">Home</Link>} key="/"/>
      <Tabs.TabPane tab={<Link to="/call">Call</Link>} key="/call"/>
    </Tabs>
  )
}

export default Navigation
