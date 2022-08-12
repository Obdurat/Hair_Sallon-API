const Clientes = require("../../Services/Clientes");
const controllerWrapper = require("../../Utils/ControllerWrapper");


const getAllUsers = controllerWrapper(async (req, res, next) => {
  const users = await Clientes.getAllUsers();
  return res.status(200).json(users);
});

const addLogradouro = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const logradouro = await Clientes.addLogradouro(req.body);
  return res.status(201).json(logradouro);
});

const addUser = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const cliente = await Clientes.addUser(req.body);
  return res.status(201).json(cliente);
});

const getAllServiceClient = controllerWrapper(async (req, res, next) => {
  console.log(req.body.clienteId);
  const todosServicos = await Clientes.getAllServiceClient(req.body.clienteId);
  return res.status(200).json(todosServicos);
});

const getClientsServicesForTime = controllerWrapper(async (req, res, next) => {
  console.log(req.body.clienteId);
  console.log(req.body.startDate);
  const servicesOnTime = await Clientes.getClientsServicesForTime(
    req.body.clienteId,
    req.body.startDate,
    req.body.endDate
  );
  return res.status(200).json(servicesOnTime);
});

const getAttendenceConfirmation = controllerWrapper(async (req, res, next) => {
  const [attendanceConfirmation] = await Clientes.getAttendenceConfirmation(
    req.body.clienteId
  );
  return res.status(200).json(attendanceConfirmation);
});

const registerCompleted = controllerWrapper(async (req, res, next) => {
  const attendanceConfirmation = await Clientes.registerCompleted(
    req.body,
    next
  );
  return res.status(200).json(attendanceConfirmation);
});


const patchUser = controllerWrapper(async (req, res, next) => {
  const user = await Clientes.patchUser(req.body);
  return res.status(200).json(user);
});

module.exports = {
  addLogradouro,
  addUser,
  getAllServiceClient,
  getClientsServicesForTime,
  getAttendenceConfirmation,
  registerCompleted,
  getAllUsers,
  patchUser
};
