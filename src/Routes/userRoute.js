const userController = require('../App/Controller/userController')


const express = require('express');
const router = express.Router();

router.get('/', userController.index)

module.exports = router;