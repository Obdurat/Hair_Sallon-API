import { Prisma, PrismaClient } from '@prisma/client';
import { IServicesRepository, PrismaServicesMethods } from './@types';

export default class ServicesRepository implements IServicesRepository {
  constructor(private _servicesSchema: PrismaServicesMethods) { }

  public create = async (data: Prisma.ServicesCreateInput) => this._servicesSchema.create({ data: { ...data } });

  public getAll = async (where: Prisma.ServicesWhereInput, include?: Prisma.ServicesInclude) => {
    const query = { where, include };
    if (JSON.stringify(query.include) === '{}') { delete query.include; }
    return this._servicesSchema.findMany(query);
  };

  public getOne = async (where: Prisma.ServicesWhereUniqueInput, include?: Prisma.ServicesInclude) => {
    const query = { where, include };
    if (JSON.stringify(query.include) === '{}') { delete query.include; }
    return this._servicesSchema.findUnique({ where, include });
  };

  public updateOne = async (where: Prisma.ServicesWhereUniqueInput, data: Partial<Prisma.ServicesCreateInput>) => this._servicesSchema.update({ where, data });

  public deleteOne = async (where: Prisma.ServicesWhereUniqueInput) => this._servicesSchema.delete({ where });
}

export const servicesRepo = new ServicesRepository(new PrismaClient().services);
