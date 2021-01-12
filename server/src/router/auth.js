const express = require('express')
const passport = require('passport')
const authRouter = express.Router()
const auth = require('../controller/auth')

authRouter
  .post('/register', auth.register)
  .post('/login', passport.authenticate('local', {
    failureRedirect: '/api/auth/login',
    successRedirect: '/dashboard'
  }))

module.exports = authRouter