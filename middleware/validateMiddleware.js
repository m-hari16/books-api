function validateFields(req, res, next) {
  const { title, description, price, imageUrl } = req.body;

  if (!title || !description || !price || !imageUrl ) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  next();
}

module.exports = validateFields;
