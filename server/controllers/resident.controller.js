const Resident = require('../models/resident.model')

const addResident = async (req, res) => {}
const deleteResident = async (req, res) => {}
const updateResident = async (req, res) => {}
const getAllResident = async (req, res) => {
  Resident.find().then((result) => {
    res.status(200).json({
      result
    })
  }).catch((err) => {
    res.status(400).json({
      err
    })
  })
}

module.exports = {
  addResident,
  deleteResident,
  updateResident,
  getAllResident
}