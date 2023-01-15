const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cookie = require('cookie-parser')
const nodemailer = require('../config/nodemailer.config')


const login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email
  })
  if (!user) {
    return res.status(400).json({
      message: "Email ou Mot de passe incorrect!"
    })
  }

  const dehashedPassword = await bcrypt.compare(req.body.password, user.password)

  if (!dehashedPassword) {
    return res.status(400).json({
      message: "Mot de passe ou Email incorrect!"
    })
  }
  const token = jwt.sign({
    fullName: user.fullName,
  }, process.env.JWT_SECRECT)
  res.cookie('token', token)

  return res.status(200).json({
    user,
    token,
    message: 'Connecté'
  })
}
const forgetpassword = (req, res) => {
  User.findOne({
    email: req.body.email
  }, (err, user) => {
    if (err || !user)
      return res.status(400).json({
        message: "Email incorrect!"
      })
    const token = jwt.sign({
      _id: user._id,
      email: user.email
    }, process.env.JWT_SECRECT, {
      expiresIn: 600
    })
    user.verification_token = token

    user.save().then(() => {
      const link = `http://localhost:3000/resetpassword/${user.verification_token}`
      nodemailer.confirmEmail(
        user.fullName,
        user.email,
        "Réintialisation de mot de passe",
        link
      )
    }).then(() =>
      res.status(200).json({
        message: 'On vous a envoyé un email de Réinitialisation de mot de passe'
      }))
  })
}
const resetpassword = (req, res) => {
  const myToken = req.params.token
  const payload = jwt.decode(myToken, process.env.JWT_SECRET)

  User.findById(payload._id, async (err, user) => {
    if (err || !user)
      return res.status(400).json({
        message: 'Cet utilisateur n_existe pas!'
      })
    if (myToken == user.verification_token) {
      const newPsw = req.body.password
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(newPsw, salt)
      user.password = hashedPassword
      user.save().then(res.status(200).json({
        message: 'le mot de passe a été modifié avec succés!'
      }))
    }
  })
}

module.exports = {
  login,
  forgetpassword,
  resetpassword,
}