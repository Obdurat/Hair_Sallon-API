'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class logradouro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  logradouro.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    bairro: {
      type: DataTypes.STRING,
    },
    rua: {
      type: DataTypes.STRING,
    },
    cidade: {
      type: DataTypes.STRING,
    },
    cep: {
      type: DataTypes.STRING,
    },
    complemento: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'logradouro',
    timestamps: false
  });
  return logradouro;
};