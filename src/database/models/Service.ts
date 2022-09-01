import { Schema, model } from 'mongoose';
import { IService } from './interfaces';

const serviceSchema = new Schema<IService>({
  serviceName: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
});

const Service = model<IService>('Service', serviceSchema);

export default Service;
