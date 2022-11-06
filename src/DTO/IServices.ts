import { z } from 'zod';

export const ServicesZodSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }).min(3, {
    message: 'Name must be at least 3 characters',
  }),
  minPrice: z.number({
    required_error: 'Price is required',
    invalid_type_error: 'Price must be a number',
  }),
  duration: z.number({
    required_error: 'Duration is required',
    invalid_type_error: 'Duration must be a number',
  }),
});

export type IServices = z.infer<typeof ServicesZodSchema>;
