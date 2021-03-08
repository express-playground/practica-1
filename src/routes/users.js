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
users.get('/:id', userController.readUser)
users.put('/:id', userController.updateUser)
users.delete('/:id', userController.deleteUser)

module.exports = users
