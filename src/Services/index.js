const Models = require("../Database/models");

const addLogradouro = async (body) => {
  console.log(body);
  const newAdress = await Models.logradouro.build(body);
  await newAdress.save();
  return newAdress;
};

const addUser = async (body) => {
  console.log(body);
  const newUser = await Models.clientes.build(body);
  await newUser.save();
  return newUser;
};

const addService = async (body) => {
  console.log(body);
  const newService = await Models.serviços.build(body);
  await newService.save();
  return newService;
};

const addAtendimento = async (body) => {
  console.log(body);
  const newAtendimento = await Models.atendimentos.build(body);
  await newAtendimento.save();
  return newAtendimento;
};

const getConfirmationCard = async (clienteId) => {
  const atendimento = await Models.clientes.findOne({
    where: { id: clienteId },
    attributes: ["nome", "telefone"],
    include: [
      {
        model: Models.serviços,
        attributes: ["serviço", "duraçãoMédia"],
        through: { model: Models.atendimentos, attributes: ["data", "preço"] },
      },
      {
        model: Models.logradouro,
        attributes: ["bairro", "rua", "cidade", "cep", "complemento"],
      },
    ],
  });
  return atendimento;
};

module.exports = {
  addLogradouro,
  addUser,
  addService,
  addAtendimento,
  getConfirmationCard,
};
