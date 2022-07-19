'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('serviços', {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: 'clientes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      descrição: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preço: {
        type: Sequelize.FLOAT
      },
      data: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('serviços');
  }
};