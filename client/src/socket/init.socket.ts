import {io} from 'socket.io-client'
import {defineHostURI} from '../utils'

const options: any = {
  'force new connection': true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transport: ['websocket']
}

export default function initSocket() {
  return io(defineHostURI(), options)
}
