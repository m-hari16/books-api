const express = require('express');
const multer = require('multer');
const router = express.Router();
const booksController = require('../controllers/booksController');
const validateFields = require('../middleware/validateMiddleware');
const apiKeyAuth = require('../middleware/apiKeyMiddleware')

const upload = multer(); // Used for handling multipart form data

router.post('/book', apiKeyAuth, validateFields, booksController.createBook);
router.post('/upload', apiKeyAuth, upload.single('image'), booksController.uploadImage);
router.get('/books', apiKeyAuth, booksController.getBooks);
router.get('/asset/:imageId', apiKeyAuth, booksController.getAsset);
router.get('/book/:id', apiKeyAuth, booksController.detail);

module.exports = router;
