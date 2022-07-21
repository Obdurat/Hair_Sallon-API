const express = require("express");
const Controllers = require("../Controllers");
const Agendamentos = require("../Controllers/Agendamentos");
const cliente = express.Router();

cliente.route("/logradouro").post(Controllers.addLogradouro);

cliente.route("/").post(Controllers.addUser);

cliente.route('/new').post(Controllers.registerCompleted);

cliente.route("/atendimento").post(Agendamentos.addAtendimento)
  .get(Controllers.getAttendenceConfirmation);

module.exports = cliente;