import { Prisma, Services } from '@prisma/client';
import IUseCases from '../../../interfaces/useCases/use_cases.interface';

export type PrismaServicesMethods = Prisma.ServicesDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export type IServicesUseCases = IUseCases<Prisma.ServicesCreateInput, Prisma.ServicesWhereUniqueInput, Prisma.ServicesWhereInput, Services, Prisma.ServicesInclude>;
