const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email
  })
  if (!user) {
    return res.status(400).json({
      message: 'User doesn_t exist'
    })
  }

  const dehashedPassword = await bcrypt.compare(req.body.password, user.password)

  if (!dehashedPassword) {
    return res.status(400).json({
      message: 'Le mot de passe ou l_email sont incorrect!'
    })
  }
  return res.status(200).json({
    user
  })
}

module.exports = login