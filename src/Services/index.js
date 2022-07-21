const Models = require("../Database/models");
const fs = require('fs');
const CustomError = require("../Errors/CustomError");

const addLogradouro = async (body, t) => {
  const newAdress = await Models.logradouro.build(body);
  await newAdress.save({ transaction: t });
  return newAdress;
};

const addUser = async (body, t) => {
  const newUser = await Models.clientes.build(body);
  await newUser.save({ transaction: t });
  return newUser;
};

const getAllUsers = async () => {
  const allUsers = await Models.clientes.findAll({ include: [{ model: Models.logradouro, attributes: { exclude: ['id'] } }]});
  return allUsers;
};

const patchUser = async (body) => {
  const user = await Models.clientes.findOne({ where: { id: body.id } });
  if (!user) throw new CustomError("Cliente não encontrado",404);
  const logradouro = await Models.logradouro.findOne({ where: { id: body.endereço } });
  if (body.logradouro) {
    logradouro.patch(body.logradouro)
    logradouro.save();
  }
  await user.patch(body);
  await user.save();
  return ({cliente: user, logradouro: logradouro});
};

const addService = async (body) => {
  const newService = await Models.serviços.build(body);
  await newService.save();
  return newService;
};

const patchService = async (body, param) => {
  const service = await Models.serviços.findOne({ where: { id: param }});
  if (!service) throw new CustomError("Serviço não encontrado", 404);
  await service.update(body);
  return service;
};

const deleteService = async (param) => {
  const service = await Models.serviços.findOne({ where: { id: param }});
  if (!service) throw new CustomError("Serviço não encontrado", 404);
  await service.destroy();
  return ({ serviço: param, status: "excluido" });
};

const addAtendimento = async (body, t) => {
  const newAtendimento = await Models.atendimentos.build(body);
  await newAtendimento.save({ transaction: t });
  return newAtendimento;
};

const deleteAtendimento = async (clienteId, serviceId) => {
  const atendimento = await Models.atendimentos.findOne({ where: { clienteId, serviceId } });
  if (!atendimento) throw new CustomError("Atendimento não Encontrado", 404);
  atendimento.destroy();
  return atendimento;
};

const updateAtendimento = async (body, clienteId, serviceId) => {
  const atendimento = await Models.atendimentos.findOne({ where: { clienteId, serviceId } });
  if (!atendimento) throw new CustomError("Atendimento não Encontrado", 404);
  await atendimento.update(body);
  return atendimento;
};

const getAllServiceClient = async (clienteId) => {
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

const getAttendenceConfirmation = async (clienteId) => {
  const query = fs.readFileSync('./src/Database/queries/attendenceConfirmation.sql', 'utf8');
  const [atendimento, _metaData] = await Models.sequelize.query(query, {
    replacements: [clienteId],
  });
  return atendimento;
}


const getClientsServicesForTime = async (clienteId, startDate, endDate) => {
  const query = fs.readFileSync('./src/Database/queries/clientesServicesTime.sql', 'utf8');
  const [atendimento, _metaData] = await Models.sequelize.query(query, {
      replacements: [clienteId, startDate, endDate],
    })
  return atendimento;
};

const servicesOnTime = async ( startDate, endDate) => {
  const query = fs.readFileSync('./src/Database/queries/servicesOnTime.sql', 'utf8');
  const [atendimento, _metaData] = await Models.sequelize.query(query, {
      replacements: [startDate, endDate],
    })
  return atendimento;
};

const getBalance = async (startDate, endDate) => {
  const query = fs.readFileSync('./src/Database/queries/balance.sql', 'utf8');
  const [balance, _metaData] = await Models.sequelize.query(query, {
      replacements: [startDate, endDate],
    })
  return balance;
};

const registerCompleted = async ({logradouro, cliente, atendimento}) => {
  const t = await  Models.sequelize.transaction();
  try {
    const {dataValues: { id: enderecoId, ...endereco }} = await addLogradouro(logradouro, t);
    const {dataValues: { id: clienteId, endereço, ...novoCliente }} = await addUser({endereço: enderecoId, ...cliente}, t);
    const {dataValues: {clienteId: userId, serviçoId, ...agenda }} = await addAtendimento({clienteId, ...atendimento}, t);
    await t.commit();
    return ({ Cliente: { clienteId, novoCliente }, Agenda: agenda, Endereço: endereco });
  } catch (e) {
    await t.rollback();   
    throw new CustomError('Erro ao criar agendamento', 400);
  }
};

module.exports = {
  addLogradouro,
  addUser,
  addService,
  addAtendimento,
  getAllServiceClient,
  getClientsServicesForTime,
  servicesOnTime,
  getBalance,
  getAttendenceConfirmation,
  registerCompleted,
  getAllUsers,
  patchUser,
  patchService,
  deleteService,
  deleteAtendimento,
  updateAtendimento
};
