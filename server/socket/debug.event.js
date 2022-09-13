const {getAllUsers} = require('../models/users')
const {getAllRooms} = require('../models/rooms')
const {clearUsers} = require('../models/users')

function debug(socket) {
  socket.on('DEBUG', ({type}) => {
    if (type === 'USER') {
      return socket.emit('DEBUG', {
        data: getAllUsers(),
        type
      })
    }

    if (type === 'ROOM') {
      return socket.emit('DEBUG', {
        data: getAllRooms(),
        type
      })
    }

    if (type === 'CLEAR') {
      clearUsers()
      return socket.emit('DEBUG', {
        data: 'Clear successful',
        type
      })
    }
  })
}

module.exports = {debug}
