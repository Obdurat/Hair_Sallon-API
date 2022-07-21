'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class atendimentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.clientes.belongsToMany(models.serviços, { 
        through: models.atendimentos,
        foreignKey: 'clienteId', 
      });
     models.serviços.belongsToMany(models.clientes, {
        through: models.atendimentos,
        foreignKey: 'serviçoId',
      });
    }
  }
  atendimentos.init({
    clienteId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'id',
      },
    },
    serviçoId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'serviços',
        key: 'id',
      },
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    preço: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    criadoEm: DataTypes.DATE,
    atualizadoEm: DataTypes.DATE,
  },
     
  { 
    createdAt: 'criadoEm',
    updatedAt: 'atualizadoEm',
    sequelize,
    modelName: 'atendimentos',
    timestamps: true,
  }
  )

  return atendimentos;
};