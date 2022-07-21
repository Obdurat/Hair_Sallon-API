const Models = require("../../Database/models");
const fs = require('fs');
const CustomError = require("../../Errors/CustomError");

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
  const allUsers = await Models.clientes.findAll({
    include: [{ model: Models.logradouro, attributes: { exclude: ["id"] } }],
  });
  return allUsers;
};

const patchUser = async (body) => {
  const user = await Models.clientes.findOne({ where: { id: body.id } });
  if (!user) throw new CustomError("Cliente não encontrado", 404);
  const logradouro = await Models.logradouro.findOne({
    where: { id: body.endereço },
  });
  if (body.logradouro) {
    logradouro.patch(body.logradouro);
    logradouro.save();
  }
  await user.patch(body);
  await user.save();
  return { cliente: user, logradouro: logradouro };
};

const getAttendenceConfirmation = async (clienteId) => {
  const query = fs.readFileSync(
    "./src/Database/queries/attendenceConfirmation.sql",
    "utf8"
  );
  const [atendimento, _metaData] = await Models.sequelize.query(query, {
    replacements: [clienteId],
  });
  return atendimento;
};

const registerCompleted = async ({ logradouro, cliente, atendimento }) => {
  const t = await Models.sequelize.transaction();
  try {
    const {
      dataValues: { id: enderecoId, ...endereco },
    } = await addLogradouro(logradouro, t);
    const {
      dataValues: { id: clienteId, endereço, ...novoCliente },
    } = await addUser({ endereço: enderecoId, ...cliente }, t);
    const {
      dataValues: { clienteId: userId, serviçoId, ...agenda },
    } = await addAtendimento({ clienteId, ...atendimento }, t);
    await t.commit();
    return {
      Cliente: { clienteId, novoCliente },
      Agenda: agenda,
      Endereço: endereco,
    };
  } catch (e) {
    await t.rollback();
    throw new CustomError("Erro ao criar agendamento", 400);
  }
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

const getClientsServicesForTime = async (clienteId, startDate, endDate) => {
  const query = fs.readFileSync(
    "./src/Database/queries/clientesServicesTime.sql",
    "utf8"
  );
  const [atendimento, _metaData] = await Models.sequelize.query(query, {
    replacements: [clienteId, startDate, endDate],
  });
  return atendimento;
};
