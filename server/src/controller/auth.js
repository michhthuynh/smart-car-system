const bcrypt = require('bcrypt')
const userModel = require('../model/user')

module.exports.register = async (req, res) => {
  const { username, password, prePassword } = req.body
  if (password === prePassword) {
    res.sendStatus(400)
    return
  }
  try {
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await userModel.create({
      username,
      password: hashPassword
    })
    res.redirect('/dashboard')
    return
  } catch (error) {
    res.sendStatus(400)
  }
}