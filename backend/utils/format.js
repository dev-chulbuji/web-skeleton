const moment = require('moment')

exports.dateFormat = (date) => moment(date).format('YYYY-MM-DD').split("T")[0]