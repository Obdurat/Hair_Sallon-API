const Models = require("../../Database/models");
const CustomError = require("../../Errors/CustomError");

const addAtendimento = async (body, t) => {
  const newAtendimento = await Models.atendimentos.build(body);
  await newAtendimento.save({ transaction: t });
  return newAtendimento;
};

const deleteAtendimento = async (clienteId, serviçoId) => {
  // O QUE ACONTECE SE O CLIENTE TIVER DOIS AGENDAMENTOS PARA O MESMO SERVIÇO ????
  const atendimento = await Models.atendimentos.findOne({
    where: { clienteId, serviçoId },
  });
  if (!atendimento) throw new CustomError("Atendimento não Encontrado", 404);
  atendimento.destroy();
  return {atendimento, message: "Atendimento deletado com sucesso"};
};

const updateAtendimento = async (body, clienteId, serviçoId) => {
  const atendimento = await Models.atendimentos.findOne({
    where: { clienteId, serviçoId },
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