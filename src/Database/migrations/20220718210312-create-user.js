'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereço: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'logradouros',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      telefone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      criado: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      atualizado: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, { timestamps: true });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};