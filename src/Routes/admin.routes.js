const express = require("express");
const Controllers = require("../Controllers");
const admin = express.Router();

admin.route("/logradouro")
  .post(Controllers.addLogradouro);

admin.route("/cliente")
  .post(Controllers.addUser)

admin.route("/atendimento")
  .post(Controllers.addAtendimento)
  .get(Controllers.getAttendenceConfirmation);

admin.route("/atendimento/time")
	.get(Controllers.getClientsServicesForTime);

		
admin.route("/atendimento/cliente")
  .get(Controllers.getAllServiceClient);


admin.route("/servico")
  .post(Controllers.addService);

admin.route("/financeiro")
  .get(Controllers.getBalance);

admin.route("/financeiro/time")
		.get(Controllers.servicesOnTime);

module.exports = admin;