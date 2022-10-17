import { Prisma, Services } from '@prisma/client';
import IRepository from '../../../interfaces/repositories/repository.interface';

export type PrismaServicesMethods = Prisma.ServicesDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export type IServicesRepository = IRepository<Prisma.ServicesCreateInput, Prisma.ServicesWhereUniqueInput, Prisma.ServicesWhereInput, Services, Prisma.ServicesInclude>;
