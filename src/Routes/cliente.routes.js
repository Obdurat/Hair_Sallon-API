const express = require("express");
const Controllers = require("../Controllers");
const Agendamentos = require("../Controllers/Agendamentos");
const Clientes = require("../Controllers/Clientes");
const cliente = express.Router();

cliente.route("/logradouro").post(Clientes.addLogradouro);

cliente.route("/").post(Clientes.addUser);

cliente.route('/novo').post(Clientes.registerCompleted);

cliente.route("/atendimento").post(Agendamentos.addAtendimento)
  .get(Clientes.getAttendenceConfirmation);

module.exports = cliente;