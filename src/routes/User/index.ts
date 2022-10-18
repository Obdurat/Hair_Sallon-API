import { Router } from 'express';
import { userController } from '../../controllers/User/user.controller';

const endpoints = Router();

endpoints.route('/')
  .get(userController.getAll)
  .post(userController.create);

endpoints.route('/:id')
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.deleteOne);

export default endpoints;
