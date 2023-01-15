const Paiement = require('../models/paiement.model')

const getAllPaiement = async (req, res) => {
  Paiement.find().then((result) => {
    res.status(200).json({
      result
    })
  }).catch((err) => {
    res.status(400).json({
      err
    })
  })
}
const addPaiement = async (req, res) => {}
const updatePaiement = (req, res) => {}

module.exports = {
  addPaiement,
  updatePaiement,
  getAllPaiement
}