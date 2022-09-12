import { Schema, model } from 'mongoose';
import { IScheduling, IService } from './interfaces';

const schedulingSchema = new Schema<IScheduling>({
  _id: String,
  service: Array<IService>,
  date: Date,
  updatedAt: Date,
  createdAt: Date,
});

const Scheduling = model<IScheduling>('Scheduling', schedulingSchema);

export default Scheduling;
