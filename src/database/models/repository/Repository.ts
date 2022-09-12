// ./src/models/MongoModel.ts
import { isValidObjectId, Model } from 'mongoose';
import { IRepository } from '../interfaces';

class Repository<T> implements IRepository<T> {
  protected model:Model<T>;

  constructor(model:Model<T>) {
    this.model = model;
  }

  public async create(obj:T):Promise<T> {
    return this.model.create({ ...obj });
  }

  public async readOne(_id:string):Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error('InvalidMongoId');
    return this.model.findOne({ _id });
  }
}
export default Repository;
