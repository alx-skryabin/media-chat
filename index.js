const express = require('express')
const cors = require('cors')
const path = require('path')
const {signIn} = require('./server/socket/sign-in.event')
const {debug} = require('./server/socket/debug.event')

const app = express()
const PORT = process.env.PORT || 5000

// If mode = 'production', any request send to static builded 'index.html'
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

/***For Express API***/
// Support JSON format on server
app.use(express.json({extended: true}))
// Support CORS
app.use(cors())

const {httpServer, io} = require('./server/socket/create.socket')(app)

io.on('connection', socket => {
  console.log('Socket event init', socket.id)

  signIn(socket, io)
  debug(socket)
})

httpServer.listen(PORT, () => {
  console.log(`Server has been started on port... ${PORT}`)
})
