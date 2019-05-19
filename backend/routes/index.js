const v1  = require('./v1')

exports.routes = (app) => {
  app.use('/v1/', v1.router)
}
