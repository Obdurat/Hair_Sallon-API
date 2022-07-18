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
    }, { timestamps: false });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientes');
  }
};