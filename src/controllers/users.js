const usersFakeRepository = require('../users.json')
const fakeRepository = require('../utils/fakeRepository')
const validators = require('../utils/validators')

const readUsers = (req, res) => {
  res.send(usersFakeRepository)
}

const createUser = (req, res) => {
  const userName = req.body.userName
  const userAge = req.body.userAge
  const userDni = req.body.userDni

  if (!validators.isDniWellFormated(userDni)) {
    return res.send('DNI no válido')
  }

  if (validators.existUser(userDni)) {
    return res.send('El usuario ya existe')
  }

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

  const chosenUser = usersFakeRepository.users.find(element => element.userDni === userDni)
  res.send(chosenUser ?? 'Usuario no encontrado')
}

const updateUser = (req, res) => {
  const userDni = req.params.dni

  const userName = req.body.userName
  const userAge = req.body.userAge
  const userNewDni = req.body?.userDni

  if (userNewDni && !validators.isDniWellFormated(userDni)) {
    return res.send('DNI nuevo no válido')
  }

  const idx = usersFakeRepository.users.findIndex(element => element.userDni === userDni)

  if (idx < 0) {
    return res.send('DNI no encontrado')
  }

  usersFakeRepository.users[idx].userDni = userNewDni ?? userDni
  usersFakeRepository.users[idx].userAge = userAge
  usersFakeRepository.users[idx].userName = userName

  fakeRepository.saveUsersToFakeRepository(usersFakeRepository)
  res.send(usersFakeRepository)
}

const deleteUser = (req, res) => {
  const userDni = req.params.dni
  const idx = usersFakeRepository.users.findIndex(element => element.userDni === userDni)
  if (idx < 0) {
    return res.send('DNI no encontrado')
  }

  usersFakeRepository.users.splice(idx, 1)
  fakeRepository.saveUsersToFakeRepository(usersFakeRepository)

  res.send(usersFakeRepository)
}

module.exports = {
  readUsers,
  createUser,
  readUser,
  updateUser,
  deleteUser,
}
