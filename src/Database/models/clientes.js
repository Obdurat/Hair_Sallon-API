'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.clientes.belongsTo(models.logradouro, { foreignKey: 'endereço'});
    }
  }
  clientes.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return clientes;
};