const express = require('express');
const Routes = require('./Routes');
const ErrorHandler = require('../src/Middleware/ErrorHandler');

const app = express();
app.use(express.json());
app.use(Routes);
app.use(ErrorHandler);

app.listen(3000, () => console.log('listening on port 3000'));