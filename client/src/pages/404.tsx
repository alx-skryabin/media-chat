import React from 'react'
import {Link} from 'react-router-dom'
import {Result} from 'antd'

function Page404() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Link to="/">Back Home</Link>}
    />
  )
}

export default Page404
