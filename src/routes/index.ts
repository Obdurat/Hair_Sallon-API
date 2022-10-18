import { Router } from 'express';
import userRoutes from './User';
import addressRoutes from './Address';
import schedulesRoutes from './Schedules';
import servicesRoutes from './Services';

const endpoints = Router();

endpoints.use('/user', userRoutes);
endpoints.use('/address', addressRoutes);
endpoints.use('/schedules', schedulesRoutes);
endpoints.use('/services', servicesRoutes);

export default endpoints;
