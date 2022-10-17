import { Prisma, Address } from '@prisma/client';
import IUseCases from '../../../interfaces/useCases/use_cases.interface';

export type PrismaAddressMethods = Prisma.AddressDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export type IAddressUseCases = IUseCases<Prisma.AddressCreateInput, Prisma.AddressWhereUniqueInput, Prisma.AddressWhereInput, Address, Prisma.AddressInclude>;
