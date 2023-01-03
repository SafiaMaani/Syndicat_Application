const mongoose = require('mongoose')

const Paiement = mongoose.model('Paiement', new mongoose.Schema({
  statut: {
    type: String,
    required: [true, "Entrez votre nom complet!"],
  },
  id_resid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resident"
  },
}))

module.exports = Paiement