'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('serviços', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      serviço: {
        type: Sequelize.STRING
      },
      duraçãoMédia: {
        allowNull: false,
        type: Sequelize.STRING
      },
    },
      {
        timestamps: false,
        tableName: 'serviços'
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('serviços');
  }
};