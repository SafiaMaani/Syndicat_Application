const mongoose = require('mongoose')

const Appartement = mongoose.model('Appartement', new mongoose.Schema({
  Number: {
    type: Number,
    required: [true, "Entrez le numero de l'appartement!"],
  },
  Statut: {
    type: String,
    required: [true, "Entrez le statut de l'appartement (loué, vide ...)!"],
  },
}))

module.exports = Appartement