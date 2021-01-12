module.exports = verifyLogged = (err, user, next) => {
  if (!user) {
    res.sendStatus(401)
    return
  }
  console.log(req.user)
  next()
}