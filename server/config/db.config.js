const mongoose = require('mongoose');
const db = require('../models');
const User = require('../models/user.model');

const connexion = () => {
  db.mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log("Successfully connect to MongoDB.");
      User.countDocuments({}, async (err, count) => {
        if (err) {
          process.exit(1)
        }
        if (count == 0) {
          const newUser = new User({
            fullName: "Safia MAANI",
            email: "safia@gmail.com",
            password: "safia123"
          })
          await newUser.save()

        }
      })
    })
    .catch(err => {
      console.error("Connection error", err);
      process.exit();
    })
}

module.exports = connexion