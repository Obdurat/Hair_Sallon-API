import { Prisma, Schedules } from '@prisma/client';
import { ISchedule, ScheduleZodSchema } from '../../DTO/ISchedule';
import ISchedulesRepository, { schedulesRepo } from '../../repositories/Schedules/schedules.repository';
import { ISchedulesUseCases } from './@types';
import PrismaScheduleAdapter from '../../utils/adapter/prisma/serialize';
import EntitiesValidator from '../Validator/EntitiesValidator';

export default class SchedulesCase implements ISchedulesUseCases {
  constructor(
    private repository: ISchedulesRepository,
    private adapter: PrismaScheduleAdapter,
    private validator: EntitiesValidator<ISchedule>,
  ) { }

  public createCase = async (data: ISchedule): Promise<Schedules> => {
    console.log('create case');
    this.validator.create({ ...data });
    console.log('fiz validação');
    const schedule = this.adapter.serialize(data);
    console.log('fiz serialize', schedule);

    const request = await this.repository.create(schedule);
    console.log('criei');
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

export const schedulesCase = new SchedulesCase(
  schedulesRepo,
  new PrismaScheduleAdapter(),
  new EntitiesValidator<ISchedule>(ScheduleZodSchema),
);
