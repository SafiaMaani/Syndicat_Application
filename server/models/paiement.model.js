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
  id_appart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appartement"
  },
  mois: {
    type: String,
    required:[true, "Entrez le mois payé!"]
  }
}))

module.exports = Paiement