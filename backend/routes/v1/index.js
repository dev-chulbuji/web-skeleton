const express = require('express')
const incidents  = require('./incidents')

const router = express.Router()

router.route('/incidents/:page/:perPage').get(incidents.gets)
router.route('/incidents/:id').get(incidents.get)
router.route('/incidents').put(incidents.put)
router.route('/incidents').post(incidents.post)
router.route('/incidents/:id').delete(incidents.delete)

exports.router = router
