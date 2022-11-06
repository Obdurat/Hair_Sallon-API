import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import endpoints from './routes';

const app = express();

app.use(express.json());
app.use(endpoints);
app.use(ErrorHandler);

export default app;
