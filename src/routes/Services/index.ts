import { Router } from 'express';
import { servicesController } from '../../controllers/Services/services.controller';

const endpoints = Router();

endpoints.route('/')
  .get(servicesController.getAll)
  .post(servicesController.create);

endpoints.route('/:id')
  .get(servicesController.getOne)
  .put(servicesController.updateOne)
  .delete(servicesController.deleteOne);

export default endpoints;
