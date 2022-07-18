'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serviços extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  serviços.init({
    descrição: DataTypes.STRING,
    data: DataTypes.DATE,
    preço: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'serviços',
  });
  return serviços;
};