const mongoose = require('mongoose')

const Resident = mongoose.model('Resident', new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Entrez votre nom complet!"],
  },
  id_appart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appartement"
  },
}))

module.exports = Resident