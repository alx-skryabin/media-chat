import {useContext} from 'react'
import {Context} from '../Context'


export default function useSocket() {
  return useContext(Context)
}
