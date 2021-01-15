const bcrypt = require('bcrypt')
const userModel = require('../model/user')
const jwt = require('jsonwebtoken')

module.exports.register = async (req, res) => {
  const { username, password, prePassword } = req.body
  if (password !== prePassword) {
    console.log("run")
    res.sendStatus(400)
    return
  }

  const userExist = await userModel.find({ username: username })
  if (userExist.length) {
    res.status(409).json({
      message: "Username already exists"
    })
    return
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({
      username,
      password: hashPassword
    })

    jwt.sign({ username }, 'secret', { expiresIn: '24h' }, (err, token) => {
      if (err) {
        console.log(err.message)
        res.sendStatus(503)
        return
      }
      console.log("Create token: ", user.id)
      res.json({
        id: user.id,
        token
      })
      return
    })

  } catch (error) {
    res.sendStatus(400).json({
      message: 'Create account failed'
    })
    return
  }
}

module.exports.login = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await userModel.find({ username })
    if (user[0] === undefined) {
      res.sendStatus(400)
      return
    }
    const isCompare = await bcrypt.compare(password, user[0]['password'])
    if (isCompare) {
      console.log('Verify account successfully')
      jwt.sign({ username }, "secret", { expiresIn: '24h' }, (err, token) => {
        if (err) {
          console.log(err.message)
          res.sendStatus(503)
          return
        }
        res.status(200).json({
          id: user[0].username,
          token
        })
        return
      })
    } else {
      res.status(401).json({
        message: 'Wrong password.'
      })
      return;
    }
  } catch (error) {
    console.log(error)
    res.sendStatus(400)
    return
  }
}