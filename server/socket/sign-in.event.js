const {getUser, deleteUser, addUser, getAllUsers} = require('../models/users')

function signIn(socket, io) {
  socket.join('free') // static room default

  socket.on('SIGN_IN', ({name, room}) => {
    room = room || 'free'

    addUser(socket.id, room, name)

    io.in('free').emit('USER_LIST', getAllUsers())

    return socket.emit('SIGN_IN', {
      name,
      room,
      uuid: socket.id,
    })
  })

  socket.on('LOG_OUT', ({id}) => {
    const user = getUser(id)
    if (!user) return

    deleteUser(id)

    io.in('free').emit('USER_LIST', getAllUsers())
  })

  socket.on('SIGN_IN_REFRESH', ({name, room, id}) => {
    if (!name || !id) return

    room = room || 'free'

    const user = getUser(id)
    if (user) deleteUser(id)

    addUser(socket.id, room, name)

    io.in('free').emit('USER_LIST', getAllUsers())

    return socket.emit('SIGN_IN_REFRESH', {
      name,
      uuid: socket.id,
    })
  })

  socket.on('disconnect', () => {
    const user = getUser(socket.id)
    if (!user) return

    console.log('disconnect', user)

    deleteUser(socket.id)

    socket.emit('USER_LIST', getAllUsers())
  })

  io.in('free').emit('USER_LIST', getAllUsers())
}

module.exports = {signIn}
