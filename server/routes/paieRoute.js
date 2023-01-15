const express = require('express')
const routerPaiement= express.Router()
const {
  addPaiement,
  deletePaiement,
  updatePaiement,
  getAllPaiement
} = require('../controllers/paiement.controller')

//api/paiements/getAllPaie : PRIVATE
routerPaiement.get('/getAllPaie', getAllPaiement)

//api/paiements/add : PRIVATE
routerPaiement.post('/add', addPaiement)

//api/paiements/delete : PRIVATE
routerPaiement.delete('/delete', deletePaiement)

//api/paiements/update : PRIVATE
routerPaiement.put('/update', updatePaiement)

module.exports = routerPaiement