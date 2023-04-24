const apiController = require('../App/Controller/apiController');
const multer = require('multer');

const express = require('express');
const { route } = require('./homeRoute');
const router = express.Router();

// Tạo một đối tượng lưu trữ để lưu trữ tệp video
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/Public/videos');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// Thiết lập loại tệp tin để chỉ cho phép tải lên các tệp video
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'video/mp4') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

// Khởi tạo middleware Multer với tùy chọn cấu hình lưu trữ và bộ lọc tệp tin
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post('/uploadfile', upload.single('video'), apiController.uploadFile);
router.post('/login',apiController.login)

module.exports = router;
