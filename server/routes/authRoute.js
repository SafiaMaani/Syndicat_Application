const express = require('express')
const routerAuth = express.Router()
const {
  login,
  forgetpassword,
  resetpassword,
} = require('../controllers/auth.controller')

// api/auth/login: PUBLIC
routerAuth.post('/login', login)

// api/auth/forgetpassword: PUBLIC
routerAuth.post('/forgetpassword', forgetpassword)

// api/auth/resetpassword: PUBLIC
routerAuth.post('/resetpassword/:token', resetpassword)

module.exports = routerAuth