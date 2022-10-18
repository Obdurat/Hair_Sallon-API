import { Router } from 'express';
import userRoutes from './User';
import addressRoutes from './Address';

const endpoints = Router();

endpoints.use('/user', userRoutes);
endpoints.use('/address', addressRoutes);

export default endpoints;
