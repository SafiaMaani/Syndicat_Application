const mongoose = require('mongoose')

const Facture = mongoose.model('Facture', new mongoose.Schema({
  statut: {
    type: String,
  },
  id_paie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Paiement"
  },
}))

module.exports = Facture