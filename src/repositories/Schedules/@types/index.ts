import { Prisma, Schedules } from '@prisma/client';
import IRepository from '../../../interfaces/repositories/repository.interface';

export type PrismaSchedulesMethods = Prisma.SchedulesDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export type ISchedulesRepository = IRepository<Prisma.SchedulesCreateInput, Prisma.SchedulesWhereUniqueInput, Prisma.SchedulesWhereInput, Schedules, Prisma.SchedulesInclude>;
