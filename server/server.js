const express = require('express')
const cors = require('cors')

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))

app.use(express.json())

//Simple route:
app.get('/', (req, res) => {
  res.json({
    message: "welcome to syndicat application"
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`)
})