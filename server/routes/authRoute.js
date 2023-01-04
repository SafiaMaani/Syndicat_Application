const express = require('express')
const routerAuth = express.Router()
const login = require('../controllers/auth.controller')

routerAuth.post('/login', login)

module.exports = routerAuth