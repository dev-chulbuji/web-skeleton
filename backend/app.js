const express = require('express')
const app = express()

const config = require('./config/config').config
const PORT = process.env.PORT || config.PORT 

app.listen(PORT, () => console.log(`start app running on ${PORT}`))