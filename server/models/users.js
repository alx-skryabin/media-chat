const users = []

const addUser = (id, room, name) => {
  const user = {id, room, name}
  users.push(user)
  return user
}

const getUser = id => {
  return users.find(user => user.id === id)
}

const clearUsers = () => {
  // users.length = 0
  users.splice(0, users.length)
}

const deleteUser = id => {
  const index = users.findIndex(user => user.id === id)
  if (index !== -1) return users.splice(index, 1)[0]
}

const getUsers = room => users.filter(user => user.room === room && !user.root)

const getAllUsers = () => users

module.exports = {addUser, clearUsers, getUser, deleteUser, getUsers, getAllUsers}
