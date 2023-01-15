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
const addPaiement = async (req, res) => {
  const paiement = new Paiement({
    statut: req.body.statut,
    id_resid: req.body.id_resid,
    id_appart: req.body.id_appart,
    mois: req.body.mois,
  })

  if (!paiement.statut || !paiement.id_resid || !paiement.id_appart || !paiement.mois) {
    return res.status(400).json({
      message: "Veuillez remplir tous les champs!"
    })
  }

  try {
    await paiement.save()
    return res.status(200).json({
      message: "Le paiement a été ajouté avec succès !"
    })
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
const updatePaiement = (req, res) => {}

module.exports = {
  addPaiement,
  updatePaiement,
  getAllPaiement
}