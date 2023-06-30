const express = require('express')
const router = require('./routes')
const cors = require('cors')
const cookieParser = require('cookie-parser')
//require('./db.js')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '2kb' }))
app.use(cookieParser());

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  credentials:true
}

app.use(cors(corsOptions))

app.use('/', router)
app.get('/', function (req, res) {
  res.send('')
})

module.exports = app
