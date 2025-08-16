const express = require('express')
const mongoose = require('mongoose')
const morgen = require('morgan')
const dotenv = require('dotenv')
const cors = require('cors')
const trackRoute = require('./routes/trackRoute')

dotenv.config()
const app = express()

mongoose.connect(process.env.MONGOOSE_URI)
mongoose.connection.on('connected', () => {
    console.log('connected to mongoose')
})

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())
app.use(morgen('dev'))
app.use('/tracks', trackRoute)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Listening on port " + port)
})