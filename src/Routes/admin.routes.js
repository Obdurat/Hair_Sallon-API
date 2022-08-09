const express = require("express");
// const Controllers = require("../Controllers");
const Agendamentos = require("../Controllers/Agendamentos");
const Clientes = require("../Controllers/Clientes");
const Serviços = require("../Controllers/Serviços");



const admin = express.Router();
admin.route("/logradouro")
  .post(Clientes.addLogradouro);

admin.route("/cliente")
  .post(Clientes.addUser)
  .get(Clientes.getAllUsers)
  .patch(Clientes.patchUser);

admin
  .route("/atendimento")
  .post(Agendamentos.addAtendimento)
  .get(Clientes.getAttendenceConfirmation);

admin.route("/atendimento/:atendimentoId")
 .delete(Agendamentos.deleteAtendimento)
 .patch(Agendamentos.updateAtendimento);

admin.route("/atendimento/time")
  .get(Clientes.getClientsServicesForTime);

admin.route("/atendimento/cliente")
  .get(Clientes.getAllServiceClient);

admin.route("/servico")
  .post(Serviços.addService);

admin.route("/servico/:id")
  .patch(Serviços.patchService)
  .delete(Serviços.deleteService);

// admin.route("/financeiro")
//   .get(Controllers.getBalance);

admin.route("/financeiro/time")
  .get(Serviços.servicesOnTime);

module.exports = admin;
