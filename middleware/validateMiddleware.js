function validateFields(req, res, next) {
  const { title, description, price, imageId } = req.body;

  if (!title || !description || !price || !imageId ) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  next();
}

module.exports = validateFields;
