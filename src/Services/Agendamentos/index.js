const Models = require("../../Database/models");
const CustomError = require("../../Errors/CustomError");

const addAtendimento = async (body, t) => {
  const newAtendimento = await Models.atendimentos.build(body);
  await newAtendimento.save({ transaction: t });
  return newAtendimento;
};

const deleteAtendimento = async (atendimentoId) => {
  // O QUE ACONTECE SE O CLIENTE TIVER DOIS AGENDAMENTOS PARA O MESMO SERVIÇO ????
  // EDITAR PARA RETORNAR O NOME DO SERVIÇ QUE FOI DELETADO
  const atendimento = await Models.atendimentos.findOne({
    where: { id: atendimentoId },
  });
  if (!atendimento) throw new CustomError("Atendimento não Encontrado", 404);
  const { dataValues: { id, ...serviço }} = await Models.serviços.findOne({ where: { id: atendimento.serviçoId } });
  atendimento.destroy();
  return ({ atendimento, serviço, message: "Atendimento deletado com sucesso" });
};

const updateAtendimento = async (atendimentoId, body) => {
  const atendimento = await Models.atendimentos.findOne({
    where: { id: atendimentoId },
  });
  const { dataValues: { id, ...serviço }} = await Models.serviços.findOne({ where: { id: atendimento.serviçoId } });
  if (!atendimento) throw new CustomError("Atendimento não Encontrado", 404);
  await atendimento.update(body);
  return ({ atendimento, serviço });
};


module.exports = {
  addAtendimento,
  deleteAtendimento,
  updateAtendimento,
}