const express = require('express');
const admin = require('./Routes/admin.routes');
const cliente = require('./Routes/cliente.routes');

const ErrorHandler = require('../src/Middleware/ErrorHandler');

const app = express();
app.use(express.json());
app.use('/admin', admin);
app.use('/cliente', cliente);
app.use(ErrorHandler);

app.listen(process.env.PORT, () => console.log(process.env.PORT, 'listening on port 3000'));