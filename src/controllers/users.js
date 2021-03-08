const usersFakeRepository = require('../users.json')
const fakeRepository = require('../utils/fakeRepository')

const readUsers = (req, res) => {
  res.send(usersFakeRepository)
}

const createUser = (req, res) => {
  const name = req.body.name
  const age = req.body.age
  const dni = req.body.dni

  usersFakeRepository.users.push({
    dni,
    name,
    age,
  })

  fakeRepository.saveUsersToFakeRepository(usersFakeRepository)

  res.send(usersFakeRepository)
}

const readUser = (req, res) => {
  const userId = req.params.id
  res.send('Read user ' + userId)
}

const updateUser = (req, res) => {
  const userId = req.params.id
  res.send('Update user ' + userId)
}

const deleteUser = (req, res) => {
  const userId = req.params.id
  res.send('Delete user ' + userId)
}

module.exports = {
  readUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser,
}
