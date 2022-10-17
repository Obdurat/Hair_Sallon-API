import { Prisma, User } from '@prisma/client';
import IRepository from '../../interfaces/repositories/repository.interface';

type PrismaUserMethods = Prisma.UserDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export default class UserRepository implements IRepository<Prisma.UserCreateInput, Prisma.UserWhereUniqueInput, Prisma.UserWhereInput, User> {
  constructor(private _userSchema: PrismaUserMethods) { }

  public create = async (data: Prisma.UserCreateInput) => this._userSchema.create({ data: { ...data } });

  public getAll = async (where: Prisma.UserWhereInput) => this._userSchema.findMany({ where, include: { } });

  public getOne = async (where: Prisma.UserWhereUniqueInput) => this._userSchema.findUnique({ where });

  public updateOne = async (where: Prisma.UserWhereUniqueInput, data: Partial<Prisma.UserCreateInput>) => this._userSchema.update({ where, data });

  public deleteOne = async (where: Prisma.UserWhereUniqueInput) => this._userSchema.delete({ where });
}
