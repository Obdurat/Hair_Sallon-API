const Services = require("../Services");
const controllerWrapper = require("../Utils/ControllerWrapper");

const addLogradouro = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const logradouro = await Services.addLogradouro(req.body);
  return res.status(201).json(logradouro);
});

const addUser = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const cliente = await Services.addUser(req.body);
  return res.status(201).json(cliente);
});

const addService = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const servico = await Services.addService(req.body);
  return res.status(201).json(servico);
});

const addAtendimento = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const atendimento = await Services.addAtendimento(req.body);
  return res.status(201).json(atendimento);
});

const getConfirmationCard = controllerWrapper(async (req, res, next) => {
  console.log(req.body.clienteId);
  const confirmar = await Services.getConfirmationCard(req.body.clienteId);
  return res.status(200).json(confirmar);
});

const getClientsServicesForTime = controllerWrapper(async (req, res, next) => {
  console.log(req.body.clienteId);
  console.log(req.body.startDate);
  const servicesOnTime = await Services.getClientsServicesForTime(req.body.clienteId, req.body.startDate, req.body.endDate);
  return res.status(200).json(servicesOnTime);
});


module.exports = { addLogradouro, 
  addUser, 
  addService, 
  addAtendimento, 
  getConfirmationCard,
  getClientsServicesForTime, };
