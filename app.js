require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({message: "Ok"})
})

app.use('/api', booksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
