const { defaultBucket } = require('../config/gcsConfig');
const errorHandler = require('../utils/errorHandler');
const { books } = require('../models');

async function createBook(req, res) {
  try {
    const { title, description, price, imageUrl } = req.body;

    // Save the book data to the PostgreSQL database
    const book = await books.create({
      title,
      description,
      price,
      imageUrl
    });

    return res.status(201).json({ message: 'Book created successfully', book });
  } catch (error) {
    errorHandler(error, res);
  }
}

async function uploadImage(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image provided' });
    }

    const imageFileName = `uploaded_image_${Date.now()}`;
    const file = defaultBucket.file(imageFileName);

    const imageBuffer = req.file.buffer;
    await file.save(imageBuffer, {
      metadata: { contentType: req.file.mimetype },
    });

    const imageUrl = file.metadata.mediaLink;
    const contentType = file.metadata.contentType;
    
    return res.status(201).json({ imageUrl, contentType });
  } catch (error) {
    errorHandler(error, res);
  }
}

async function getBooks(req, res) {
  try {
    const book = await books.findAll({
      attributes: ['id', 'title', 'description', 'price', 'imageUrl', 'createdAt', 'updatedAt'],
    });

    return res.status(200).json(book);
  } catch (error) {
    errorHandler(error, res);
  }
}

module.exports = {
  createBook,
  uploadImage,
  getBooks,
};
