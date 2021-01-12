const express = require('express')
const router = require('./router')
const cors = require('cors')
const connectDatabase = require('./configs/mongooseSetup')
connectDatabase()
const cookieSession = require('cookie-session')
const passport = require('passport')
require('./configs/passportSetup')
const app = express()

app.use(cookieSession({
  name: 'session',
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: 'cookieSecret'
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.json())
app.use(cors())
app.use('/api', router)


app.listen(5000, () => console.log('server is running at 5000'))