const Serviços = require("../../Services/Serviços");
const controllerWrapper = require("../../Utils/ControllerWrapper");

const addService = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const servico = await Serviços.addService(req.body);
  return res.status(201).json(servico);
});

const servicesOnTime = controllerWrapper(async (req, res, next) => {
  console.log(req.body.startDate);
  const servicesOnTime = await Serviços.servicesOnTime(
    req.body.startDate,
    req.body.endDate
  );
  return res.status(200).json(servicesOnTime);
});

const patchService = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const service = await Serviços.patchService(req.body, id);
  return res.status(200).json(service);
});

const deleteService = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const service = await Serviços.deleteService(id);
  return res.status(200).json(service);
});

module.exports = {
  addService,
  servicesOnTime,
  patchService,
  deleteService,
};
