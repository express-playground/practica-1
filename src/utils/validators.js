const usersFakeRepository = require('../users.json')

const isDniWellFormated = dni => {
  const dniFormat = /^[A-Z]{3}[0-9]{2}[a-z][0-9]$/
  return dniFormat.test(dni)
}

const existUser = userDni => {
  const elementsFound = usersFakeRepository.users.findIndex(element => element.userDni === userDni)
  return elementsFound >= 0
}

module.exports = {
  isDniWellFormated,
  existUser,
}
