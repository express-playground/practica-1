const readUsers = (req, res) => {
  res.send('Read all users')
}

const createUser = (req, res) => {
  res.send('Create user')
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
