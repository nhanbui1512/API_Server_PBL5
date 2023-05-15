const registerController = require('../App/Controller/registerController');

const express = require('express');
const router = express.Router();

router.get('/', registerController.index);
router.post('/signup',registerController.signUp)


module.exports = router;
