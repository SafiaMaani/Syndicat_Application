require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connexion = require('./config/db.config')
connexion()

const app = express()

app.use(cors())

const routerAuth = require('./routes/authRoute')
const routerAppart = require('./routes/appartRoute')
const routerResident = require('./routes/residentRoute')
const routerPaiement = require('./routes/paiementRoute')

app.use(express.json())

//api/auth
app.use('/api/auth/', routerAuth)
//api/appart
app.use('/api/appartements/', routerAppart)
//api/residents
app.use('/api/residents/', routerResident)
//api/paiements
app.use('.api/paiements', routerPaiement)

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`)
})

module.exports = app