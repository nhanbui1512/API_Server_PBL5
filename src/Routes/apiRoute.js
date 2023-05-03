const apiController = require('../App/Controller/apiController');
const multer = require('multer');

const express = require('express');
const isLoginMiddleWare = require('../App/Middleware/isLoginMiddleware');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/Public/videos');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'video/mp4') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post('/uploadfile', upload.single('video'), apiController.uploadFile);
router.post('/login',apiController.login)
router.post('/sendwarning',isLoginMiddleWare, apiController.sendWarning)


module.exports = router;
