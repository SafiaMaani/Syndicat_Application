const Resident = require('../models/resident.model')

const addResident = async (req, res) => {

  const resident = new Resident({
    fullName: req.body.fullName,
    cin: req.body.cin,
    tel: req.body.tel,
  })

  if (!resident.fullName || !resident.cin || !resident.tel) {
    return res.status(400).json({
      message: "Veuillez remplir tous les champs!"
    })
  }

  try {
    await resident.save()
    return res.status(200).json({
      message: "Le résident a été ajouté avec succès !"
    })
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
const deleteResident = async (req, res) => {
  const id = req.params.id

  Resident.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        return res.status(404).json({
          message: `Cannot delete Resident with id=${id}. Maybe Resident was already deleted!`
        });
      } else {
        return res.status(200).json({
          message: "Resident was deleted successfully!"
        })
      }
    })
    .catch(err => {
      return res.status(500).json({
        message: "Could not delete Resident with id=" + id
      });
    });
}
const updateResident = async (req, res) => {
  // if (!req.body) {
  //   return res.status(400).json({
  //     message: "Data to update can not be empty!"
  //   });
  // }
  const id = req.params.id;

  Resident.findByIdAndUpdate(id, req.body)
    .then(data => {
      if (!data) {
        res.status(404).json({
          message: `Cannot update Resident with id=${id}. Maybe Resident was not found!`
        });
      } else res.json({
        message: "Resident was updated successfully."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: "Error updating Resident with id=" + id
      });
    });
}
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
const getResidentById = async (req, res) => {
  const {
    id
  } = req.params
  const resident = await Resident.findOne({
    _id: id
  })
  return res.status(200).json({
    resident
  })
}
module.exports = {
  addResident,
  deleteResident,
  updateResident,
  getAllResident,
  getResidentById
}