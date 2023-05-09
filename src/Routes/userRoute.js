const userController = require('../App/Controller/userController')
const userMiddleware = require('../App/Middleware/userMiddleware')


const express = require('express');
const router = express.Router();

router.get('/' , userMiddleware, userController.index)
router.get('/profile',userController.profile)

module.exports = router;