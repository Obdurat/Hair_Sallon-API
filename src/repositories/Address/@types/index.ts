import { Prisma, Address } from '@prisma/client';
import IRepository from '../../../interfaces/repositories/repository.interface';

export type PrismaAddressMethods = Prisma.AddressDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export type IAddressRepository = IRepository<Prisma.AddressCreateInput, Prisma.AddressWhereUniqueInput, Prisma.AddressWhereInput, Address, Prisma.AddressInclude>;
