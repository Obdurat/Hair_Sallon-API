import { Schema, model } from 'mongoose';
import { IClient } from './interfaces';

const clientSchema = new Schema<IClient>({
  clientName: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  schedules: Array,
});

export default model<IClient>('Client', clientSchema);
