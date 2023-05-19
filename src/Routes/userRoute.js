const userController = require('../App/Controller/userController')

const express = require('express');
const router = express.Router();

router.get('/' , userController.index)
router.get('/profile',userController.profile)
router.get('/password',userController.passwordPage)
router.get('/logout',userController.logOut)
router.get('/statisticmonth',userController.statisticDay)


router.post('/changeprofile',userController.changeProfile)
router.post('/changepassword',userController.changePassword)

module.exports = router;