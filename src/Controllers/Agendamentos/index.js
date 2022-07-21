const Agendamentos = require("../../Services/Agendamentos"); // ISSO PRECISA SER MUDADO NA REFATORAÇÂO
const controllerWrapper = require("../../Utils/ControllerWrapper");

const addAtendimento = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const atendimento = await Agendamentos.addAtendimento(req.body);
  return res.status(201).json(atendimento);
});

const deleteAtendimento = controllerWrapper(async (req, res, next) => {
  const { clienteId, serviceId } = req.params;
  console.log('apaguei bb')
  const agendamento = await Agendamentos.deleteAtendimento(clienteId, serviceId);
  return res.status(200).json(agendamento);
});

const updateAtendimento = controllerWrapper(async (req, res, next) => {
  const { clienteId, serviceId } = req.params;
  const agendamento = await Agendamentos.updateAtendimento(clienteId, serviceId);
  return res.status(200).json(agendamento);
});

module.exports = {
  addAtendimento,
  deleteAtendimento,
  updateAtendimento,
};
