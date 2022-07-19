"use strict";
const logradouros = require("./logradouros.json");
const clientes = require("./clientes.json");
const servicos = require("./servicos.json");
const uuid = require("uuid");

const enderecos = logradouros.map((ele) => {
  ele.id = uuid.v1();
  return ele;
});

const cliente = clientes.map((client, index) => {
  client.id = uuid.v1();
  client.endereço = enderecos[index].id;
  client.criado = new Date();
  client.atualizado = new Date();
  return client;
});

const tasks = servicos.map((service, index) => {
  service.userId = cliente[index].id;
  return service;
});

module.exports = {
  async up(queryInterface, Sequelize) {
    const logradourosSeed = await queryInterface.bulkInsert("logradouros", enderecos, { returning: true });
    const clienteSeed = await queryInterface.bulkInsert("clientes", cliente, { returning: true });
    const tasksSeed = await queryInterface.bulkInsert("serviços", tasks, { returning: true });
    return ({ logradourosSeed, clienteSeed, tasksSeed });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("logradouros", null, {});
    await queryInterface.bulkDelete("clientes", null, {});
    await queryInterface.bulkDelete("serviços", null, {});
    return null;
  },
};
