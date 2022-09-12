import { Schema, model } from 'mongoose';
import { IService } from './interfaces';

const serviceSchema = new Schema<IService>({
  serviceName: String,
  price: Number,
  duration: Number,
});

const Service = model<IService>('Service', serviceSchema);

export default Service;
