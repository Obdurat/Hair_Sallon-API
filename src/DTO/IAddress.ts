import { z } from 'zod';

export const AddressZodSchema = z.object({
  street: z.string({
    required_error: 'Street is required',
    invalid_type_error: 'Street must be a string',
  }),
  city: z.string({
    required_error: 'City is required',
    invalid_type_error: 'City must be a string',
  }),
  cep: z.string({
    required_error: 'CEP is required',
    invalid_type_error: 'CEP must be a string',
  }).length(8, {
    message: 'CEP must be 8 characters',
  }),
});

export type IAddress = z.infer<typeof AddressZodSchema>;
