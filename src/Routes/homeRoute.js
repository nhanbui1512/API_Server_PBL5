const homeController = require('../App/Controller/homeController')


const express = require('express');
const router = express.Router();

router.get('/', homeController.index)
router.get('/chart',homeController.chart)


module.exports = router;