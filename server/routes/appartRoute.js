const express = require('express')
const routerAppart = express.Router()
const {
  addAppartement,
  deleteAppartement,
  updateAppartement,
  getAllAppartement
} = require('../controllers/appartement.contoller')

//api/appart/getAllAppart : PRIVATE
routerAppart.get('/getAllAppart', getAllAppartement)

//api/appart/add : PRIVATE
routerAppart.post('/add', addAppartement)

//api/appart/delete : PRIVATE
routerAppart.delete('/delete', deleteAppartement)

//api/appart/update : PRIVATE
routerAppart.put('/update', updateAppartement)

module.exports = routerAppart