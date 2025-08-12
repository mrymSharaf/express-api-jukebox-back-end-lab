const express = require('express')
const mongoose = require('mongoose')
const morgen = require('morgan')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

mongoose.connect(process.env.MONGOOSE_URI)
mongoose.connection.on('connected', () => {
    console.log('connected to mongoose')
})

app.use(morgen('dev'))


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Listening on port " + port)
})