const Appartement = require('../models/appartement.model')

const addAppartement = async (req, res) => {

  const appartement = new Appartement({
    Number: req.body.Number,
    rooms: req.body.rooms,
    price: req.body.price,
    Statut: req.body.Statut,
  })

  if (!appartement.Number || !appartement.rooms || !appartement.price || !appartement.Statut) {
    return res.status(400).json({
      message: "Veuillez remplir tous les champs!"
    })
  }

  try {
    await appartement.save()
    return res.status(200).json({
      message: "L'appartement a été ajouté avec succès !"
    })
  } catch (error) {
    return res.status(400).json({
      message: error
    })
  }
}
const deleteAppartement = async (req, res) => {
  const id = req.params.id

  Appartement.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        return res.status(404).json({
          message: `Cannot delete Appartement with id=${id}. Maybe Appartement was already deleted!`
        });
      } else {
        return res.status(200).json({
          message: "Appartement was deleted successfully!"
        })
      }
    })
    .catch(err => {
      return res.status(500).json({
        message: "Could not delete Appartement with id=" + id
      });
    });
};

const updateAppartement = async (req, res) => {}
const getAllAppartement = async (req, res) => {
  Appartement.find().then((result) => {
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
  addAppartement,
  deleteAppartement,
  updateAppartement,
  getAllAppartement
}