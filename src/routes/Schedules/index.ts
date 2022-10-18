import { Router } from 'express';
import { schedulesController } from '../../controllers/Schedules/schedules.controller';

const endpoints = Router();

endpoints.route('/')
  .get(schedulesController.getAll)
  .post(schedulesController.create);

endpoints.route('/:id')
  .get(schedulesController.getOne)
  .put(schedulesController.updateOne)
  .delete(schedulesController.deleteOne);

export default endpoints;
