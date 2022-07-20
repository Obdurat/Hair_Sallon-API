const { Op } = require("sequelize");
const Models = require("../Database/models");
const fs = require('fs');
// const Sequelize = require("sequelize");
// const multer  = require('multer');

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname);
//     }
//   }),
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype === 'image/png' ||
//       file.mimetype === 'image/jpg' ||
//       file.mimetype === 'image/jpeg'
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only image are allowed'));
//     }
//   }
// }).single('image');



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
        through: { model: Models.atendimentos, attributes: ["data", "preço"], order: [["data", "DESC"]] },
        
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
}

const getBalance = async (startDate, endDate) => {
  const query = fs.readFileSync('./src/Database/queries/balance.sql', 'utf8');
  const [balance, _metaData] = await Models.sequelize.query(query, {
      replacements: [startDate, endDate],
    })
  return balance;
}


module.exports = {
  addLogradouro,
  addUser,
  addService,
  addAtendimento,
  getConfirmationCard,
  getClientsServicesForTime,
  servicesOnTime,
  getBalance,
};
