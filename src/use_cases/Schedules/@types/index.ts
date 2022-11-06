import { Prisma, Schedules } from '@prisma/client';
import { ISchedule } from '../../../DTO/ISchedule';
import IUseCases from '../../../interfaces/useCases/use_cases.interface';

export type PrismaSchedulesMethods = Prisma.SchedulesDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;

export type ISchedulesUseCases = IUseCases<ISchedule, Prisma.SchedulesWhereUniqueInput, Prisma.SchedulesWhereInput, Schedules, Prisma.SchedulesInclude>;
