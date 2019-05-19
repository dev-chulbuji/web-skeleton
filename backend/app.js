const express = require('express')
const app = express()

const config = require('./config/config').config
const PORT = process.env.PORT || config.PORT 

const winston = require('winston')
const accessMiddleware = require(`./middlewares/access`)

app.use(accessMiddleware.access)

app.get('/', (req, res, next) => {
  res.json('test')
})

app.listen(PORT, () => console.log(`start app running on ${PORT}`))