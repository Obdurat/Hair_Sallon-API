import { Prisma, PrismaClient } from '@prisma/client';
import { ISchedulesRepository, PrismaSchedulesMethods } from './@types';

export default class SchedulesRepository implements ISchedulesRepository {
  constructor(private _schedulesSchema: PrismaSchedulesMethods) { }

  public create = async (data: Prisma.SchedulesCreateInput) => this._schedulesSchema.create({ data: { ...data } });

  public getAll = async (where: Prisma.SchedulesWhereInput, include?: Prisma.SchedulesInclude) => {
    const query = { where, include };
    if (JSON.stringify(query.include) === '{}') { delete query.include; }
    return this._schedulesSchema.findMany(query);
  };

  public getOne = async (where: Prisma.SchedulesWhereUniqueInput, include?: Prisma.SchedulesInclude) => {
    const query = { where, include };
    if (JSON.stringify(query.include) === '{}') { delete query.include; }
    return this._schedulesSchema.findUnique(query);
  };

  public updateOne = async (where: Prisma.SchedulesWhereUniqueInput, data: Partial<Prisma.SchedulesCreateInput>) => this._schedulesSchema.update({ where, data });

  public deleteOne = async (where: Prisma.SchedulesWhereUniqueInput) => this._schedulesSchema.delete({ where });
}

export const schedulesRepo = new SchedulesRepository(new PrismaClient().schedules);
