const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const userModel = require('../model/user')
const bcrypt = require('bcrypt')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userModel.findById(id)
    done(null, user)
  } catch (error) {
    done(new Error('Failed to deserialize an user'))
  }
})

passport.use(new localStrategy(async (username, password, done) => {
  try {
    const user = await userModel.find({ username })
    if (user[0] === undefined) {
      return done(null, false)
    }
    const isCompare = await bcrypt.compare(password, user[0]['password'])
    if (isCompare) {
      return done(null, user[0])
    } else {
      return done(null, false)
    }
  } catch (error) {
    return done(null, false)
  }
}))