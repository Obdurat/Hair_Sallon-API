import { Prisma, Schedules } from '@prisma/client';
import IUseCases from '../../../interfaces/useCases/use_cases.interface';

export type PrismaSchedulesMethods = Prisma.SchedulesDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export type ISchedulesUseCases = IUseCases<Prisma.SchedulesCreateInput, Prisma.SchedulesWhereUniqueInput, Prisma.SchedulesWhereInput, Schedules, Prisma.SchedulesInclude>;
