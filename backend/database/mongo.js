const mongoose = require('mongoose')
const config = require(`../config/config`).config
// Node.js의 native Promise 사용
mongoose.Promise = global.Promise

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGO_URI || config.mongoConnectionStr, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e))