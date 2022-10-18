import { Router } from 'express';
import { addressController } from '../../controllers/Address/address.controller';

const endpoints = Router();

endpoints.route('/')
  .get(addressController.getAll)
  .post(addressController.create);

endpoints.route('/:id')
  .get(addressController.getOne)
  .put(addressController.updateOne)
  .delete(addressController.deleteOne);

export default endpoints;
