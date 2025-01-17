const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    title: {  
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year_published: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    edition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // key_words: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    //   allowNull: true,
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;

