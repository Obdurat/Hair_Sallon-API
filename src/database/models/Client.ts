import { Schema, model } from 'mongoose';
import { IClient, IScheduling } from './interfaces';

const clientSchema = new Schema<IClient>({
  clientName: String,
  address: String,
  phone: String,
  schedules: Array<IScheduling>,
});

const Client = model<IClient>('Client', clientSchema);

export default Client;
