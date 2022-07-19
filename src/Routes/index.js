const express = require("express");
const Controllers = require("../Controllers");
const Router = express.Router();

Router.route("/logradouro").post(Controllers.addLogradouro);

Router.route("/cliente").post(Controllers.addUser);

Router.route("/servico").post(Controllers.addService);

Router.route("/atendimento").post(Controllers.addAtendimento).get(Controllers.getConfirmationCard);

module.exports = Router;
