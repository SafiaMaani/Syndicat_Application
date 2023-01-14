const express = require('express')
const routerAppart = express.Router()
const {
  addAppartement,
  deleteAppartement,
  updateAppartement,
  getAllAppartement
} = require('../controllers/appartement.contoller')

//api/appartements/getAllAppart : PRIVATE
routerAppart.get('/getAllAppart', getAllAppartement)

//api/appartements/add : PRIVATE
routerAppart.post('/add', addAppartement)

//api/appartements/delete : PRIVATE
routerAppart.delete('/delete', deleteAppartement)

//api/appartements/update : PRIVATE
routerAppart.put('/update', updateAppartement)

module.exports = routerAppart