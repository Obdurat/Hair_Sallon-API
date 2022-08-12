// const Services = require("../Services");
// const controllerWrapper = require("../Utils/ControllerWrapper");

// const addLogradouro = controllerWrapper(async (req, res, next) => {
//   console.log(req.body);
//   const logradouro = await Services.addLogradouro(req.body);
//   return res.status(201).json(logradouro);
// });

// const addUser = controllerWrapper(async (req, res, next) => {
//   console.log(req.body);
//   const cliente = await Services.addUser(req.body);
//   return res.status(201).json(cliente);
// });

// const addService = controllerWrapper(async (req, res, next) => {
//   console.log(req.body);
//   const servico = await Services.addService(req.body);
//   return res.status(201).json(servico);
// });

// const addAtendimento = controllerWrapper(async (req, res, next) => {
//   console.log(req.body);
//   const atendimento = await Services.addAtendimento(req.body);
//   return res.status(201).json(atendimento);
// });

// const getAllServiceClient = controllerWrapper(async (req, res, next) => {
//   console.log(req.body.clienteId);
//   const todosServicos = await Services.getAllServiceClient(req.body.clienteId);
//   return res.status(200).json(todosServicos);
// });

// const getClientsServicesForTime = controllerWrapper(async (req, res, next) => {
//   console.log(req.body.clienteId);
//   console.log(req.body.startDate);
//   const servicesOnTime = await Services.getClientsServicesForTime(
//     req.body.clienteId,
//     req.body.startDate,
//     req.body.endDate
//   );
//   return res.status(200).json(servicesOnTime);
// });

// const servicesOnTime = controllerWrapper(async (req, res, next) => {
//   console.log(req.body.startDate);
//   const servicesOnTime = await Services.servicesOnTime(
//     req.body.startDate,
//     req.body.endDate
//   );
//   return res.status(200).json(servicesOnTime);
// });

// const getBalance = controllerWrapper(async (req, res, next) => {
//   const [balance] = await Services.getBalance(
//     req.body.startDate,
//     req.body.endDate
//   );
//   return res.status(200).json(balance);
// });

// const getAttendenceConfirmation = controllerWrapper(async (req, res, next) => {
//   const [attendanceConfirmation] = await Services.getAttendenceConfirmation(
//     req.body.clienteId
//   );
//   return res.status(200).json(attendanceConfirmation);
// });

// const registerCompleted = controllerWrapper(async (req, res, next) => {
//   const attendanceConfirmation = await Services.registerCompleted(
//     req.body,
//     next
//   );
//   return res.status(200).json(attendanceConfirmation);
// });

// const getAllUsers = controllerWrapper(async (req, res, next) => {
//   const users = await Services.getAllUsers();
//   return res.status(200).json(users);
// });

// const patchUser = controllerWrapper(async (req, res, next) => {
//   const user = await Services.patchUser(req.body);
//   return res.status(200).json(user);
// });

// const patchService = controllerWrapper(async (req, res, next) => {
//   const { id } = req.params;
//   const service = await Services.patchService(req.body, id);
//   return res.status(200).json(service);
// });

// const deleteService = controllerWrapper(async (req, res, next) => {
//   const { id } = req.params;
//   const service = await Services.deleteService(id);
//   return res.status(200).json(service);
// });

// const deleteAtendimento = controllerWrapper(async (req, res, next) => {
//   const { atendimentoId } = req.params;
//   const agendamento = await Services.deleteAtendimento(atendimentoId);
//   return res.status(200).json(agendamento);
// });

// const updateAtendimento = controllerWrapper(async (req, res, next) => {
//   const { atendimentoId } = req.params;
//   const agendamento = await Services.updateAtendimento(atendimentoId, req.body);
//   return res.status(200).json(agendamento);
// });

// module.exports = {
//   addLogradouro, // Cliente
//   addUser, // Cliente
//   getAllServiceClient, // Cliente
//   getClientsServicesForTime, // Cliente
//   getAttendenceConfirmation, // Cliente
//   registerCompleted, // Cliente
//   getAllUsers, // Cliente
//   patchUser, // Cliente
//   addService, // Serviços
//   servicesOnTime, // Serviços
//   patchService, // Serviços
//   deleteService, // Serviços
//   addAtendimento, // Agendamentos
//   getBalance, 
//   deleteAtendimento, // Agendamentos
//   updateAtendimento // Agendamentos
// };
