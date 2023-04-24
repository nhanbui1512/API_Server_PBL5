const homeController = require('../App/Controller/homeController')


const express = require('express');
const router = express.Router();

router.get('/', homeController.index)

module.exports = router;