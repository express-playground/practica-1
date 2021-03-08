// ==========================================
// REQUIRES
// ==========================================
const express = require('express')
const userController = require('../controllers/users')

// ==========================================
// INIT
// ==========================================
const users = express.Router()

// ==========================================
// ENDPOINTS
// ==========================================
users.get('/', userController.readUsers)
users.post('/new', userController.createUser)
users.get('/:dni', userController.readUser)
users.put('/:dni', userController.updateUser)
users.delete('/:dni', userController.deleteUser)

module.exports = users
