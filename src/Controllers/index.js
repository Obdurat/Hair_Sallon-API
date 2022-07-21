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

const getAllServiceClient = controllerWrapper(async (req, res, next) => {
  console.log(req.body.clienteId);
  const todosServicos = await Services.getAllServiceClient(req.body.clienteId);
  return res.status(200).json(todosServicos);
});

const getClientsServicesForTime = controllerWrapper(async (req, res, next) => {
  console.log(req.body.clienteId);
  console.log(req.body.startDate);
  const servicesOnTime = await Services.getClientsServicesForTime(req.body.clienteId, req.body.startDate, req.body.endDate);
  return res.status(200).json(servicesOnTime);
});

const servicesOnTime = controllerWrapper(async (req, res, next) => {
  console.log(req.body.startDate);
  const servicesOnTime = await Services.servicesOnTime(req.body.startDate, req.body.endDate);
  return res.status(200).json(servicesOnTime);
});

const getBalance = controllerWrapper(async (req, res, next) => {
  const [balance] = await Services.getBalance(req.body.startDate, req.body.endDate);
  return res.status(200).json(balance);
});

const getAttendenceConfirmation = controllerWrapper(async (req, res, next) => {
  const [attendanceConfirmation] = await Services.getAttendenceConfirmation(req.body.clienteId);
  return res.status(200).json(attendanceConfirmation);
});

const registerCompleted = controllerWrapper(async (req, res, next) => {
  const attendanceConfirmation = await Services.registerCompleted(req.body, next);
  return res.status(200).json(attendanceConfirmation);
});

module.exports = { addLogradouro, 
  addUser, 
  addService, 
  addAtendimento, 
  getAllServiceClient,
  getClientsServicesForTime,
  servicesOnTime, 
  getBalance,
  getAttendenceConfirmation,
  registerCompleted,
  };
