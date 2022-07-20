const express = require("express");
const Controllers = require("../Controllers");
const Router = express.Router();

Router.route("/logradouro").post(Controllers.addLogradouro);

Router.route("/cliente").post(Controllers.addUser);

Router.route("/cliente/time").get(Controllers.getClientsServicesForTime);


Router.route("/servico").post(Controllers.addService);

Router.route("/servico/time").get(Controllers.servicesOnTime);

Router.route("/atendimento").post(Controllers.addAtendimento).get(Controllers.getConfirmationCard);

Router.route("/balanco").get(Controllers.getBalance);

module.exports = Router;
