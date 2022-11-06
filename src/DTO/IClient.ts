import { z } from 'zod';
import { AddressZodSchema } from './IAddress';

export const ClientZodSchema = AddressZodSchema.extend({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(3, {
    message: 'Name must be at least 3 characters',
  }),
  phone: z.string({
    required_error: 'Phone is required',
    invalid_type_error: 'Phone must be a string',
  }).length(11, {
    message: 'Phone must be 11 characters',
  }),
  address_number: z.number({
    required_error: 'Address number is required',
    invalid_type_error: 'Address number must be a number',
  }),
  address_complement: z.string({
    required_error: 'Address complement is required',
    invalid_type_error: 'Address complement must be a string',
  }),
});

export type IClient = z.infer<typeof ClientZodSchema>;
