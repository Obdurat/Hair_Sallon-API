import { Prisma, User } from '@prisma/client';
import UserRepository, { userRepository } from '../../repositories/User/user.repository';
import { IUserUseCases } from './@types';

export default class UserCase implements IUserUseCases {
  constructor(private repository: UserRepository) { }

  public createCase = async (data: Prisma.UserCreateInput): Promise<User> => {
    const request = await this.repository.create(data);
    return request;
  };

  public getAllCase = async (where: Prisma.UserWhereInput, include?: Prisma.UserInclude): Promise<User[]> => {
    const request = await this.repository.getAll(where, include);
    return request;
  };

  public getOneCase = async (where: Prisma.UserWhereUniqueInput, include?: Prisma.UserInclude): Promise<User | null> => {
    const request = await this.repository.getOne(where, include);
    return request;
  };

  public updateOneCase = async (where: Prisma.UserWhereUniqueInput, data: Partial<Prisma.UserCreateInput>): Promise<User | null> => {
    const request = await this.repository.updateOne(where, data);
    return request;
  };

  public deleteOneCase = async (where: Prisma.UserWhereUniqueInput): Promise<User> => {
    const request = await this.repository.deleteOne(where);
    return request;
  };
}

export const userCases = new UserCase(userRepository);
