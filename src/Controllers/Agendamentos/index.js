const Services = require("../../Services"); // ISSO PRECISA SER MUDADO NA REFATORAÇÂO
const controllerWrapper = require("../../Utils/ControllerWrapper");

const addAtendimento = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const atendimento = await Services.addAtendimento(req.body);
  return res.status(201).json(atendimento);
});

const deleteAtendimento = controllerWrapper(async (req, res, next) => {
  const { clienteId, serviceId } = req.params;
  const agendamento = await Services.deleteAtendimento(clienteId, serviceId);
  return res.status(200).json(agendamento);
});

const updateAtendimento = controllerWrapper(async (req, res, next) => {
  const { clienteId, serviceId } = req.params;
  const agendamento = await Services.updateAtendimento(clienteId, serviceId);
  return res.status(200).json(agendamento);
});
