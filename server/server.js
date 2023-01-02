require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connexion = require('./config/db.config')
const app = express()

connexion()
const corsOptions = {
  origin: 'http://localhost:9999'
}

app.use(cors(corsOptions))

app.use(express.json())

//Simple route:
app.get('/', (req, res) => {
  res.json({
    message: "welcome to syndicat application"
  })
})

const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`)
})