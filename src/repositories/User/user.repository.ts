import { Prisma, PrismaClient } from '@prisma/client';
import { IUserRepository, PrismaUserMethods } from './@types';
import { addressSelector, schedulesSelector } from './selects';

export default class UserRepository implements IUserRepository {
  constructor(private _userSchema: PrismaUserMethods) { }

  public create = async (data: Prisma.UserCreateInput) => this._userSchema.create({ data: { ...data } });

  public getAll = async (where: Prisma.UserWhereInput, include?: Prisma.UserInclude) => {
    const query = { where, include };
    if (JSON.stringify(query.include) === '{}') { delete query.include; }
    if (query.include?.address === '') { query.include.address = addressSelector; }
    if (query.include?.schedules === '') { query.include.schedules = schedulesSelector; }
    return this._userSchema.findMany(query);
  };

  public getOne = async (where: Prisma.UserWhereUniqueInput, include?: Prisma.UserInclude) => {
    const query = { where, include };
    if (JSON.stringify(query.include) === '{}') { delete query.include; }
    if (query.include?.address === '') { query.include.address = addressSelector; }
    if (query.include?.schedules === '') { query.include.schedules = schedulesSelector; }
    return this._userSchema.findUnique(query);
  };

  public updateOne = async (where: Prisma.UserWhereUniqueInput, data: Partial<Prisma.UserCreateInput>) => this._userSchema.update({ where, data });

  public deleteOne = async (where: Prisma.UserWhereUniqueInput) => this._userSchema.delete({ where });
}

export const userRepository = new UserRepository(new PrismaClient().user);
