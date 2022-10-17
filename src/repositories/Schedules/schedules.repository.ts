import { Prisma } from '@prisma/client';
import { ISchedulesRepository, PrismaSchedulesMethods } from './@types';

export default class SchedulesRepository implements ISchedulesRepository {
  constructor(private _schedulesSchema: PrismaSchedulesMethods) { }

  public create = async (data: Prisma.SchedulesCreateInput) => this._schedulesSchema.create({ data: { ...data } });

  public getAll = async (where: Prisma.SchedulesWhereInput, include?: Prisma.SchedulesInclude) => this._schedulesSchema.findMany({ where, include });

  public getOne = async (where: Prisma.SchedulesWhereUniqueInput, include?: Prisma.SchedulesInclude) => this._schedulesSchema.findUnique({ where, include });

  public updateOne = async (where: Prisma.SchedulesWhereUniqueInput, data: Partial<Prisma.SchedulesCreateInput>) => this._schedulesSchema.update({ where, data });

  public deleteOne = async (where: Prisma.SchedulesWhereUniqueInput) => this._schedulesSchema.delete({ where });
}
