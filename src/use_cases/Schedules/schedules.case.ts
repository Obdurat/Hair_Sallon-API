import { Prisma, Schedules } from '@prisma/client';
import ISchedulesRepository, { schedulesRepo } from '../../repositories/Schedules/schedules.repository';
import { ISchedulesUseCases } from './@types';

export default class SchedulesCase implements ISchedulesUseCases {
  constructor(private repository: ISchedulesRepository) { }

  public createCase = async (data: Prisma.SchedulesCreateInput): Promise<Schedules> => {
    const request = await this.repository.create(data);
    return request;
  };

  public getAllCase = async (where: Prisma.SchedulesWhereInput, include?: Prisma.SchedulesInclude): Promise<Schedules[]> => {
    const request = await this.repository.getAll(where, include);
    return request;
  };

  public getOneCase = async (where: Prisma.SchedulesWhereUniqueInput, include?: Prisma.SchedulesInclude): Promise<Schedules | null> => {
    const request = await this.repository.getOne(where, include);
    return request;
  };

  public updateOneCase = async (where: Prisma.SchedulesWhereUniqueInput, data: Partial<Prisma.SchedulesCreateInput>): Promise<Schedules | null> => {
    const request = await this.repository.updateOne(where, data);
    return request;
  };

  public deleteOneCase = async (where: Prisma.SchedulesWhereUniqueInput): Promise<Schedules> => {
    const request = await this.repository.deleteOne(where);
    return request;
  };
}

export const schedulesCase = new SchedulesCase(schedulesRepo);
