// ==========================================
// REQUIRES
// ==========================================
const express = require('express')
const appController = require('../controllers/app')

// ==========================================
// INIT
// ==========================================
const app = express.Router()

// ==========================================
// APIS
// ==========================================
app.get('/', appController.get)

module.exports = app
