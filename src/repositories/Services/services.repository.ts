import { Prisma } from '@prisma/client';
import { IServicesRepository, PrismaServicesMethods } from './@types';

export default class ServicesRepository implements IServicesRepository {
  constructor(private _servicesSchema: PrismaServicesMethods) { }

  public create = async (data: Prisma.ServicesCreateInput) => this._servicesSchema.create({ data: { ...data } });

  public getAll = async (where: Prisma.ServicesWhereInput) => this._servicesSchema.findMany({ where, include: { } });

  public getOne = async (where: Prisma.ServicesWhereUniqueInput) => this._servicesSchema.findUnique({ where });

  public updateOne = async (where: Prisma.ServicesWhereUniqueInput, data: Partial<Prisma.ServicesCreateInput>) => this._servicesSchema.update({ where, data });

  public deleteOne = async (where: Prisma.ServicesWhereUniqueInput) => this._servicesSchema.delete({ where });
}
