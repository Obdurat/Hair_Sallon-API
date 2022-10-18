import { Prisma, PrismaClient } from '@prisma/client';
import { IAddressRepository, PrismaAddressMethods } from './@types';

export default class AddressRepository implements IAddressRepository {
  constructor(private _addressSchema: PrismaAddressMethods) { }

  public create = async (data: Prisma.AddressCreateInput) => this._addressSchema.create({ data: { ...data } });

  public getAll = async (where: Prisma.AddressWhereInput, include?: Prisma.AddressInclude) => {
    const query = { where, include };
    if (JSON.stringify(query.include) === '{}') { delete query.include; }
    return this._addressSchema.findMany(query);
  };

  public getOne = async (where: Prisma.AddressWhereUniqueInput, include?: Prisma.AddressInclude) => {
    const query = { where, include };
    if (JSON.stringify(query.include) === '{}') { delete query.include; }
    return this._addressSchema.findUnique(query);
  };

  public updateOne = async (where: Prisma.AddressWhereUniqueInput, data: Partial<Prisma.AddressCreateInput>) => this._addressSchema.update({ where, data });

  public deleteOne = async (where: Prisma.AddressWhereUniqueInput) => this._addressSchema.delete({ where });
}

export const addressRepo = new AddressRepository(new PrismaClient().address);
