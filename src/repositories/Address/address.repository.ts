import { Prisma } from '@prisma/client';
import { IAddressRepository, PrismaAddressMethods } from './@types';

export default class AddressRepository implements IAddressRepository {
  constructor(private _addressSchema: PrismaAddressMethods) { }

  public create = async (data: Prisma.AddressCreateInput) => this._addressSchema.create({ data: { ...data } });

  public getAll = async (where: Prisma.AddressWhereInput) => this._addressSchema.findMany({ where, include: { } });

  public getOne = async (where: Prisma.AddressWhereUniqueInput) => this._addressSchema.findUnique({ where });

  public updateOne = async (where: Prisma.AddressWhereUniqueInput, data: Partial<Prisma.AddressCreateInput>) => this._addressSchema.update({ where, data });

  public deleteOne = async (where: Prisma.AddressWhereUniqueInput) => this._addressSchema.delete({ where });
}
