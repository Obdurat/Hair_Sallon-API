import { Router } from 'express';
import { userController } from '../controllers/User/user.controller';

const endpoints = Router();

endpoints.route('/').get(userController.getAll);

export default endpoints;
