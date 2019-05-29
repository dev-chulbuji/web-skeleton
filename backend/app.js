const express = require("express")
const app = express()
const cors = require("cors")
const config = require("./config/config").config
const PORT = process.env.PORT || config.PORT;

const winston = require("winston")
const accessMiddleware = require(`./middlewares/access`)
const mongo = require(`./database/mongo`)
const bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }))
app.use(bodyParser.json({ type: "application/json", limit: "10mb" }))

app.use(accessMiddleware.access)
require("./routes").routes(app)
app.use((req, res, next) => next({ code: 404, msg: "uri is not found" }))

app.listen(PORT, () => console.log(`start app running on ${PORT}`))
