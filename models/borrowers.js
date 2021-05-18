'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class borrowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  borrowers.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    borrowed_at: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'borrowers',
  });
  return borrowers;
};