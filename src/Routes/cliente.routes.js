const express = require('express');
const Agendamentos = require('../Controllers/Agendamentos');
const Clientes = require('../Controllers/Clientes');
const Serviços = require('../Controllers/Serviços');
const cliente = express.Router();

cliente.route('/logradouro').post(Clientes.addLogradouro);

cliente.route('/').post(Clientes.addUser);

cliente.route('/novo').post(Clientes.registerCompleted);

cliente.route('/atendimento').post(Agendamentos.addAtendimento)
  .get(Clientes.getAttendenceConfirmation);

cliente.route('/servicos').get(Serviços.getAllServices);

module.exports = cliente;