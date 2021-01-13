const express = require('express')
const passport = require('passport')
const authRouter = express.Router()
const auth = require('../controller/auth')
const getToken = require('../middleware/getToken')
const verifyLogin = require('../middleware/verifyLogin')
const verifyToken = require('../middleware/verifyToken')

authRouter
  .post('/register', auth.register)
  .post('/login', auth.login)
  .get('/check', getToken, verifyToken, (req, res) => {
    res.sendStatus(200)
  })

module.exports = authRouter