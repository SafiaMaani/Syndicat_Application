const express = require('express')
const routerResident = express.Router()
const {
  addResident,
  deleteResident,
  updateResident,
  getAllResident
} = require('../controllers/resident.controller')

//api/Residents/getAllResident : PRIVATE
routerResident.get('/getAllResident', getAllResident)

//api/Residents/add : PRIVATE
routerResident.post('/add', addResident)

//api/Resident/sdelete : PRIVATE
routerResident.delete('/delete', deleteResident)

//api/Residents/update : PRIVATE
routerResident.put('/update', updateResident)

module.exports = routerResident