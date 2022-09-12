import { z } from 'zod';

const ServiceZodSchema = z.object({
  serviceName: z.string(),
  price: z.number(),
  duration: z.number(),
});

const SchedulingZodSchema = z.object({
  _id: z.string(),
  service: ServiceZodSchema.array(),
  date: z.date(),
  updatedAt: z.date(),
  createdAt: z.date(),
});

const ClientZodSchema = z.object({
  clientName: z.string(),
  address: z.string(),
  phone: z.string(),
  schedules: SchedulingZodSchema.array(),
});

// ./src/interfaces/IModel.ts

export interface IRepository<T> {
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T | null>,
}

export type IClient = z.infer<typeof ClientZodSchema>;
export type IScheduling = z.infer<typeof SchedulingZodSchema>;
export type IService = z.infer<typeof ServiceZodSchema>;
