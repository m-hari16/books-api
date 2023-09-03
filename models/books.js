'use strict'

module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('books', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    imageId: DataTypes.STRING
  });
  
  return Books;
}