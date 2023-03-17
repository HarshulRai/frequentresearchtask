const express = require('express')
const userController = require('../controllers/register')

const router = express.Router()

router.post('/', userController.postRegister)

router.get('/show', userController.getRegister)


module.exports = router
