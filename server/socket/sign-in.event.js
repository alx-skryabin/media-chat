function signIn(socket) {
  socket.on('SIGN_IN', ({name}) => {
    return socket.emit('SIGN_IN', {
      message: name,
      code: 1
    })
  })
}

module.exports = {signIn}
