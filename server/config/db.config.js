const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
          const salt = await bcrypt.genSalt(10)
          const hashedPassword = await bcrypt.hash(process.env.PASSWORD, salt)

          const newUser = new User({
            fullName: process.env.FULL_NAME,
            tel: process.env.TELEPHONE,
            email: process.env.EMAIL,
            password: hashedPassword,
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