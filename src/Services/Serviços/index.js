const Models = require("../../Database/models");
const fs = require('fs');
const CustomError = require("../../Errors/CustomError");

const addService = async (body) => {
  const newService = await Models.serviços.build(body);
  await newService.save();
  return newService;
};

const patchService = async (body, param) => {
  const service = await Models.serviços.findOne({ where: { id: param } });
  if (!service) throw new CustomError("Serviço não encontrado", 404);
  await service.update(body);
  return service;
};

const deleteService = async (param) => {
  const service = await Models.serviços.findOne({ where: { id: param } });
  if (!service) throw new CustomError("Serviço não encontrado", 404);
  await service.destroy();
  return { serviço: param, status: "excluido" };
};

const servicesOnTime = async (startDate, endDate) => {
  const query = fs.readFileSync(
    "./src/Database/queries/servicesOnTime.sql",
    "utf8"
  );
  const [atendimento, _metaData] = await Models.sequelize.query(query, {
    replacements: [startDate, endDate],
  });
  return atendimento;
};
