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
      models.serviços.belongsTo(models.clientes, { foreignKey: 'userId'});
    }
  }
  serviços.init({
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    descrição: DataTypes.STRING,
    data: DataTypes.STRING,
    preço: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'serviços',
    timestamps: false,
  });
  return serviços;
};