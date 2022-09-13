import {useState} from 'react'

const LSKUser: string = 'user'
const LSKUuid: string = 'uuid'

const savedUser: string | null = window.localStorage.getItem(LSKUser) || null
const savedUuid: string | null = window.localStorage.getItem(LSKUuid) || null

export default function useUser() {
  let [user, setUser] = useState(savedUser)

  return {
    user,
    uuid: savedUuid,
    setUser: (name: string, uuid: string) => {
      window.localStorage.setItem(LSKUser, name)
      window.localStorage.setItem(LSKUuid, uuid)
      setUser(name)
    },
    removeUser: () => {
      window.localStorage.removeItem(LSKUser)
      window.localStorage.removeItem(LSKUuid)
      setUser(null)
    }
  }
}
