/* eslint-disable class-methods-use-this */
// import { ZodError } from 'zod';
import { SomeZodObject } from 'zod';
import CustomError from '../../utils/CustomError';

export default class EntitiesValidator<T> {
  constructor(private schema: SomeZodObject) {}

  public create = (entity: T) => {
    const valid = this.schema.safeParse(entity);
    if (!valid.success) {
      const message = valid.error.issues.map((issue) => issue.message).join(' | ');
      throw new CustomError(message, 400);
    }
  };

  public idValidate = (id: string) => {
    const hexadecimal = id.length === 24;
    if (!hexadecimal) {
      throw new CustomError('Id must have 24 hexadecimal characters', 400);
    }
  };

  public found = (entity: T | null) => {
    if (!entity) {
      throw new CustomError('Object not found', 404);
    }
  };

  public existsParams = (entity: Partial<T>) => {
    if (Object.keys(entity).length === 0) {
      throw new CustomError('Empty param', 400);
    }
  };
}
