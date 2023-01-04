const mongoose = require('mongoose')

const Resident = mongoose.model('Resident', new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Entrez votre nom complet!"],
  },
  cin: {
    type: String,
    required: [true, "Entrez le N° de catre d'indentité nationale!"]
  },
  tel: {
    type: String,
    required: [true, "Entrez le N° de téléphone de locataire!"]
  }
}))

module.exports = Resident