const Services = require("../../Services"); // ISSO PRECISA SER MUDADO NA REFATORAÇÂO
const controllerWrapper = require("../../Utils/ControllerWrapper");

const addService = controllerWrapper(async (req, res, next) => {
  console.log(req.body);
  const servico = await Services.addService(req.body);
  return res.status(201).json(servico);
});

const servicesOnTime = controllerWrapper(async (req, res, next) => {
  console.log(req.body.startDate);
  const servicesOnTime = await Services.servicesOnTime(
    req.body.startDate,
    req.body.endDate
  );
  return res.status(200).json(servicesOnTime);
});

const patchService = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const service = await Services.patchService(req.body, id);
  return res.status(200).json(service);
});

const deleteService = controllerWrapper(async (req, res, next) => {
  const { id } = req.params;
  const service = await Services.deleteService(id);
  return res.status(200).json(service);
});
