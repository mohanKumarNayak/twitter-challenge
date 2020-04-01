const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/userController')

router.get('/tweets/:name',userController.show)

module.exports = router