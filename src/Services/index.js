const Models = require('../Database/models');

const addLogradouro = async (body) => {
    console.log(body);
    const newAdress = await Models.logradouro.build(body);
    await newAdress.save();
    return newAdress;
};

module.exports = { addLogradouro };
