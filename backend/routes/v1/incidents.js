exports.gets = async (req, res, next) => {
  res.json(`get incidents`)
}

exports.get = async (req, res, next) => {
  res.json(`get incident by id`)
}

exports.put = async (req, res, next) => {
  res.json(`update incident by id`)
}

exports.post = async (req, res, next) => {
  res.json(`create incident`)
}

exports.delete = async (req, res, next) => {
  res.json(`delete incident by id`)
}
