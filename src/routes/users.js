// ==========================================
// REQUIRES
// ==========================================
const express = require('express')
const userController = require('../controllers/users')

// ==========================================
// INIT
// ==========================================
const app = express()
const users = express.Router()

// ==========================================
// APIS
// ==========================================
users.get('/', userController.get)

module.exports = users
