import { z } from 'zod';
import { ClientZodSchema } from './IClient';

export const ScheduleZodSchema = ClientZodSchema.extend({
  serviceId: z.string({
    required_error: 'Service ID is required',
    invalid_type_error: 'Service ID must be a string',
  }),
  price: z.number({
    required_error: 'Price is required',
    invalid_type_error: 'Price must be a number',
  }),
  date: z.string({
    required_error: 'Date is required',
    invalid_type_error: 'Date must be a date',
  }),
  finished: z.boolean({
    required_error: 'Finished is required',
    invalid_type_error: 'Finished must be a boolean',
  }),
});

export type ISchedule = z.infer<typeof ScheduleZodSchema>;
