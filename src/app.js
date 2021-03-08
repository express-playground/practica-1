// ==========================================
// REQUIRES
// ==========================================
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

// ==========================================
// INIT
// ==========================================
const app = express()
const routes = require('./routes')
global.srcPath = __dirname

// ==========================================
// SETTINGS
// ==========================================
app.set('port', 4500)

// ==========================================
// MIDDLEWARES
// ==========================================
app.use(bodyParser.json())

// ==========================================
// DB CONECTIONS
// ==========================================

// ==========================================
// ROUTES
// ==========================================
app.use('/api/users', routes.userRoutes)
app.use('/api', routes.appRoutes)

// ==========================================
// LISTENER
// ==========================================
app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'))
})
