'use strict'

module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('books', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  });
  
  return Books;
}