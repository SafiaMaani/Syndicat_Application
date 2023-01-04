require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connexion = require('./config/db.config')
connexion()

const app = express()
const corsOptions = {
  origin: 'http://localhost:9999'
}
app.use(cors(corsOptions))

const routerAuth = require('./routes/authRoute')
app.use(express.json())

//api/auth
app.use('/api/auth/', routerAuth)


const PORT = process.env.PORT || 8888
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`)
})

module.exports = app