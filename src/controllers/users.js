const usersFakeRepository = require('../users.json')
const fakeRepository = require('../utils/fakeRepository')

const readUsers = (req, res) => {
  res.send(usersFakeRepository)
}

const createUser = (req, res) => {
  const userName = req.body.name
  const userAge = req.body.age
  const userDni = req.body.dni

  usersFakeRepository.users.push({
    userDni,
    userName,
    userAge,
  })

  fakeRepository.saveUsersToFakeRepository(usersFakeRepository)
  res.send(usersFakeRepository)
}

const readUser = (req, res) => {
  const userDni = req.params.dni

  const chosenUser = usersFakeRepository.users.find(element => element.dni === userDni)
  res.send(chosenUser)
}

const updateUser = (req, res) => {
  const userDni = req.params.id

  const userNewName = req.body.name
  const userName = req.body.name
  const userAge = req.body.age

  const idx = usersFakeRepository.users.findIndex(element => element.dni === userDni)

  idx.name = userName
  idx.age = userAge
  idx.userDni = userNewName

  fakeRepository.saveUsersToFakeRepository(usersFakeRepository)
  res.send(usersFakeRepository)
}

const deleteUser = (req, res) => {
  const userDni = req.params.id

  const idx = usersFakeRepository.users.findIndex(element => element.dni === userDni)

  if (idx >= 0) {
    usersFakeRepository.users.splice(idx, 1)
    fakeRepository.saveUsersToFakeRepository(usersFakeRepository)
  }

  res.send(usersFakeRepository)
}

module.exports = {
  readUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser,
}
