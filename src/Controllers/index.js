const Services = require('../Services');

const addLogradouro = async (req, res, next) => {
    console.log(req.body);
    const logradouro = await Services.addLogradouro(req.body);
    return res.status(201).json(logradouro);
};

const addUser = async (req, res, next) => {
    console.log(req.body);
    const user = await Services.addUser(req.body);
    return res.status(201).json(user);
};

const addService = async (req, res, next) => {
    console.log(req.body);
    const service = await Services.addService(req.body);
    return res.status(201).json(service);
};

const getWork = async (req, res, next) => {
    console.log(req.body.userId);
    const service = await Services.getWork(req.body.userId);
    return res.status(200).json(service);
}


module.exports = { addLogradouro, addUser, addService, getWork };