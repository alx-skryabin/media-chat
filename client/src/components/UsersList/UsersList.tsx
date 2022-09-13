import React from 'react'
import {useAppSelector} from '../../hooks/redux.hooks'
import './UsersList.scss'

const UsersList = () => {
  let {users} = useAppSelector(state => state.system)

  return (
    <div className="ts_users-list">
      {
        users &&
        <ul>
          {users.map((item: any, index) => {
            return (
              <li key={index}>
                <i className="fa-regular fa-user"/>
                {item.name} - {item.room} - {item.id}
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}

export default UsersList
