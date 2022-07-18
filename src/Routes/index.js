const express = require('express');
const Controllers = require('../Controllers');
const Router = express.Router();

Router.route('/')
    .post(Controllers.logradouroController);


module.exports = Router;