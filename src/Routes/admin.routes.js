const express = require("express");
const Controllers = require("../Controllers");
const Agendamentos = require("../Controllers/Agendamentos");

const admin = express.Router();

admin.route("/logradouro")
  .post(Controllers.addLogradouro);

admin.route("/cliente")
  .post(Controllers.addUser)
  .get(Controllers.getAllUsers)
  .patch(Controllers.patchUser);

admin
  .route("/atendimento")
  .post(Controllers.addAtendimento)
  .get(Controllers.getAttendenceConfirmation);

admin.route("/atendimento/:atendimentoId")
 .delete(Agendamentos.deleteAtendimento)
 .patch(Agendamentos.updateAtendimento);

admin.route("/atendimento/time")
  .get(Controllers.getClientsServicesForTime);

admin.route("/atendimento/cliente")
  .get(Controllers.getAllServiceClient);

admin.route("/servico")
  .post(Controllers.addService);

admin.route("/servico/:id")
  .patch(Controllers.patchService)
  .delete(Controllers.deleteService);

admin.route("/financeiro")
  .get(Controllers.getBalance);

admin.route("/financeiro/time")
  .get(Controllers.servicesOnTime);

module.exports = admin;
