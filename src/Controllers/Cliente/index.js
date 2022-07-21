const Services = require("../../Services"); // ISSO PRECISA SER MUDADO NA REFATORAÇÂO
const controllerWrapper = require("../../Utils/ControllerWrapper");

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

const getAllServiceClient = controllerWrapper(async (req, res, next) => {
  console.log(req.body.clienteId);
  const todosServicos = await Services.getAllServiceClient(req.body.clienteId);
  return res.status(200).json(todosServicos);
});

const getClientsServicesForTime = controllerWrapper(async (req, res, next) => {
  console.log(req.body.clienteId);
  console.log(req.body.startDate);
  const servicesOnTime = await Services.getClientsServicesForTime(
    req.body.clienteId,
    req.body.startDate,
    req.body.endDate
  );
  return res.status(200).json(servicesOnTime);
});

const getAttendenceConfirmation = controllerWrapper(async (req, res, next) => {
  const [attendanceConfirmation] = await Services.getAttendenceConfirmation(
    req.body.clienteId
  );
  return res.status(200).json(attendanceConfirmation);
});

const registerCompleted = controllerWrapper(async (req, res, next) => {
  const attendanceConfirmation = await Services.registerCompleted(
    req.body,
    next
  );
  return res.status(200).json(attendanceConfirmation);
});

const getAllUsers = controllerWrapper(async (req, res, next) => {
  const users = await Services.getAllUsers();
  return res.status(200).json(users);
});

const patchUser = controllerWrapper(async (req, res, next) => {
  const user = await Services.patchUser(req.body);
  return res.status(200).json(user);
});
