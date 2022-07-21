const Models = require("../../Database/models");
const CustomError = require("../../Errors/CustomError");

const addAtendimento = async (body, t) => {
  const newAtendimento = await Models.atendimentos.build(body);
  await newAtendimento.save({ transaction: t });
  return newAtendimento;
};

const deleteAtendimento = async (clienteId, serviceId) => {
  const atendimento = await Models.atendimentos.findOne({
    where: { clienteId, serviceId },
  });
  if (!atendimento) throw new CustomError("Atendimento não Encontrado", 404);
  atendimento.destroy();
  return atendimento;
};

const updateAtendimento = async (body, clienteId, serviceId) => {
  const atendimento = await Models.atendimentos.findOne({
    where: { clienteId, serviceId },
  });
  if (!atendimento) throw new CustomError("Atendimento não Encontrado", 404);
  await atendimento.update(body);
  return atendimento;
};


module.exports = {
  addAtendimento,
  deleteAtendimento,
  updateAtendimento,
}