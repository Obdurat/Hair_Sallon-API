import { Prisma, Services } from '@prisma/client';
import IServicesRepository from '../../repositories/Services/services.repository';
import { IServicesUseCases } from './@types';

export default class ServicesCase implements IServicesUseCases {
  constructor(private repository: IServicesRepository) { }

  public createCase = async (data: Prisma.ServicesCreateInput): Promise<Services> => {
    const request = await this.repository.create(data);
    return request;
  };

  public getAllCase = async (where: Prisma.ServicesWhereInput, include?: Prisma.ServicesInclude): Promise<Services[]> => {
    const request = await this.repository.getAll(where, include);
    return request;
  };

  public getOneCase = async (where: Prisma.ServicesWhereUniqueInput, include?: Prisma.ServicesInclude): Promise<Services | null> => {
    const request = await this.repository.getOne(where, include);
    return request;
  };

  public updateOneCase = async (where: Prisma.ServicesWhereUniqueInput, data: Partial<Prisma.ServicesCreateInput>): Promise<Services | null> => {
    const request = await this.repository.updateOne(where, data);
    return request;
  };

  public deleteOneCase = async (where: Prisma.ServicesWhereUniqueInput): Promise<Services> => {
    const request = await this.repository.deleteOne(where);
    return request;
  };
}
