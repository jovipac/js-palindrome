const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const indexRouter = require('./routes/index')

const app = express()

// CORS
app.use(cors())

app.use(logger('dev'))

// Lectura y parseo del body
app.use(express.json())

app.use('/', indexRouter)

module.exports = app
