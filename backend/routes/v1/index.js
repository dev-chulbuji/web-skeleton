const express = require('express')
const incidents = require('./incidents')
const histories = require('./histories')

const router = express.Router()

router.route('/incidents').get(incidents.get)
router.route('/incidents/:page?/:total?').get(incidents.getList)
router.route('/incidents').post(incidents.post)
router.route('/incidents').delete(incidents.delete)
router.route('/incidents').put(incidents.put)

router.route('/histories').get(histories.getList)

exports.router = router