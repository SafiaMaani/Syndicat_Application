require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connexion = require('./config/db.config')
connexion()

const app = express()
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   Credential: true
// }

app.use(cors())

const routerAuth = require('./routes/authRoute')
const routerAppart = require('./routes/appartRoute')
const routerResident = require('./routes/residentRoute')

app.use(express.json())

//api/auth
app.use('/api/auth/', routerAuth)
//api/appart
app.use('/api/appartements/', routerAppart)
//api/residents
app.use('/api/residents/', routerResident)

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`)
})

module.exports = app