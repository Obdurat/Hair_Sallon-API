import { Prisma, Address } from '@prisma/client';
import IAddressRepository from '../../repositories/Address/address.repository';
import { IAddressUseCases } from './@types';

export default class AddressCase implements IAddressUseCases {
  constructor(private repository: IAddressRepository) { }

  public createCase = async (data: Prisma.AddressCreateInput): Promise<Address> => {
    const request = await this.repository.create(data);
    return request;
  };

  public getAllCase = async (where: Prisma.AddressWhereInput, include?: Prisma.AddressInclude): Promise<Address[]> => {
    const request = await this.repository.getAll(where, include);
    return request;
  };

  public getOneCase = async (where: Prisma.AddressWhereUniqueInput, include?: Prisma.AddressInclude): Promise<Address | null> => {
    const request = await this.repository.getOne(where, include);
    return request;
  };

  public updateOneCase = async (where: Prisma.AddressWhereUniqueInput, data: Partial<Prisma.AddressCreateInput>): Promise<Address | null> => {
    const request = await this.repository.updateOne(where, data);
    return request;
  };

  public deleteOneCase = async (where: Prisma.AddressWhereUniqueInput): Promise<Address> => {
    const request = await this.repository.deleteOne(where);
    return request;
  };
}
