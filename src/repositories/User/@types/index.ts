import { Prisma, User } from '@prisma/client';
import IRepository from '../../../interfaces/repositories/repository.interface';

export type PrismaUserMethods = Prisma.UserDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export type IUserRepository = IRepository<Prisma.UserCreateInput, Prisma.UserWhereUniqueInput, Prisma.UserWhereInput, User>;
