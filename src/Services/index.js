const Models = require('../Database/models');

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


const getWork = async (userId) => {
    console.log(userId);
    const service = await Models.serviços.findOne({
        where: { userId },
        attributes: {exclude: ['userId']},
            include: [{
                model: Models.clientes,
                attributes: ['nome', 'telefone'],
                include: [{
                    model: Models.logradouro,
                    attributes: ['rua', 'bairro', 'cidade', 'complemento', 'cep'],
            }],
        }],    
    });
    return service;
}


module.exports = { addLogradouro, addUser, addService, getWork };
