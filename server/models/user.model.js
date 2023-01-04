const mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Entrez votre nom complet!"],
  },
  tel: {
    type: String,
    required: [true, "Entrer votre N° de téléphone"],
  },
  email: {
    type: String,
    required: [true, "Entrez votre email!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Entrez votre mot de passe!"],
    minlength: 6,
  },
}))

module.exports = User