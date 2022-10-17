import { Prisma, User } from '@prisma/client';
import IUseCases from '../../../interfaces/useCases/use_cases.interface';

export type PrismaUserMethods = Prisma.UserDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export type IUserUseCases = IUseCases<Prisma.UserCreateInput, Prisma.UserWhereUniqueInput, Prisma.UserWhereInput, User, Prisma.UserInclude>;
