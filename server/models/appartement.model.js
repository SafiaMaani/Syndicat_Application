const mongoose = require('mongoose')

const Appartement = mongoose.model('Appartement', new mongoose.Schema({
  Number: {
    type: Number,
    required: [true, "Entrez le numero de l'appartement!"],
  },
  id_resid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resident"
  },
  rooms:{
    type: Number,
    required:[true, "Entrez le nombre des chambres de cet appartement!"],
  },
  price:{
    type: Number,
    required:[true, "Entrez le prix de cet appartement!"]
  },
  Statut: {
    type: String,
    required: [true, "Entrez le statut de l'appartement (loué, vide ...)!"],
  },

}))

module.exports = Appartement