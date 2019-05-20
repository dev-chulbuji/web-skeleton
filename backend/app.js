const express = require('express')
const app = express()

const config = require('./config/config').config
const PORT = process.env.PORT || config.PORT 

const winston = require('winston')
const accessMiddleware = require(`./middlewares/access`)
const mongo = require(`./database/mongo`)

app.use(accessMiddleware.access)
require('./routes').routes(app)
app.use((req, res, next) => next({code: 404, msg: 'uri is not found'}))

app.listen(PORT, () => console.log(`start app running on ${PORT}`))