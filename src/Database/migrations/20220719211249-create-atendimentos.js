'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('atendimentos', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
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
      criadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      atualizadoEm: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    },
    { timestamps: true }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('atendimentos');
  }
};