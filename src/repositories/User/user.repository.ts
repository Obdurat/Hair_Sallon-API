import { Prisma } from '@prisma/client';
import { IUserRepository, PrismaUserMethods } from './@types';

export default class UserRepository implements IUserRepository {
  constructor(private _userSchema: PrismaUserMethods) { }

  public create = async (data: Prisma.UserCreateInput) => this._userSchema.create({ data: { ...data } });

  public getAll = async (where: Prisma.UserWhereInput, include?: Prisma.UserInclude) => this._userSchema.findMany({ where, include });

  public getOne = async (where: Prisma.UserWhereUniqueInput, include?: Prisma.UserInclude) => this._userSchema.findUnique({ where, include });

  public updateOne = async (where: Prisma.UserWhereUniqueInput, data: Partial<Prisma.UserCreateInput>) => this._userSchema.update({ where, data });

  public deleteOne = async (where: Prisma.UserWhereUniqueInput) => this._userSchema.delete({ where });
}
