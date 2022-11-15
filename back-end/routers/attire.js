const express = require('express')
const router = express.Router()

const attire = require('../controllers/attire')

router.get('/', attire.getAttire)

module.exports = router