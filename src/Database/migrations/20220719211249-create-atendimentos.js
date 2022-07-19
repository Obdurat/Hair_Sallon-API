'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atendimentos', {
      clienteId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'clientes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      serviçoId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'serviços',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      preço: {
        type: Sequelize.FLOAT
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
    },
    { timestamps: false }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('atendimentos');
  }
};