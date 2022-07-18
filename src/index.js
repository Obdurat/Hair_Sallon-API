const express = require('express');
const Routes = require('./Routes');

const app = express();
app.use(express.json());
app.use(Routes);

app.listen(3000, () => console.log('listening on port 3000'));