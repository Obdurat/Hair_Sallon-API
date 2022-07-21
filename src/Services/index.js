const Models = require("../Database/models");
const fs = require('fs');


const addLogradouro = async (body, t) => {
  console.log(body);
  const newAdress = await Models.logradouro.build(body);
  await newAdress.save({transaction: t});
  return newAdress;
};

const addUser = async (body, t) => {
  console.log(body);
  const newUser = await Models.clientes.build(body);
  await newUser.save({transaction: t});
  return newUser;
};

const addService = async (body) => {
  console.log(body);
  const newService = await Models.serviços.build(body);
  await newService.save();
  return newService;
};

const addAtendimento = async (body, t) => {
  console.log(body);
  const newAtendimento = await Models.atendimentos.build(body);
  await newAtendimento.save({transaction: t});
  return newAtendimento;
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
    return ({Cliente: {clienteId, novoCliente}, Agenda: agenda, Endereço: endereco});
  } catch(e) {
    console.log(e);
    await t.rollback();
    return ({ message: 'Erro ao registrar atendimento'});
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
};
