import express from 'express';
import endpoints from './routes';

const app = express();

app.use(express.json());
app.use(endpoints);

export default app;
