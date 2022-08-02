import {io} from 'socket.io-client'
import {defineHostURI} from '../utils'

export default function initSocket() {
  return io(defineHostURI(), {})
}
