const Services = require('../Services');

const logradouroController = async (req, res, next) => {
    console.log(req.body);
    const logradouro = await Services.addLogradouro(req.body);
    return logradouro;
};

module.exports = { logradouroController };