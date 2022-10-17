import {
  Prisma, User, Address, Schedules, Services,
} from '@prisma/client';

export type DataUnion = Prisma.UserCreateInput | Prisma.AddressCreateInput | Prisma.SchedulesCreateInput | Prisma.ServicesCreateInput;

export type WhereUniqueUnion = Prisma.UserWhereUniqueInput | Prisma.AddressWhereUniqueInput | Prisma.SchedulesWhereUniqueInput | Prisma.ServicesWhereUniqueInput;

export type WhereUnion = Prisma.UserWhereInput | Prisma.AddressWhereInput | Prisma.SchedulesWhereInput | Prisma.ServicesWhereInput;

export type ReturnUnion = User | Address | Schedules | Services;

export type IncludeUnion = Prisma.UserInclude | Prisma.AddressInclude | Prisma.ServicesInclude | Prisma.SchedulesInclude;

export default interface IRepository<T extends DataUnion, E extends WhereUniqueUnion, U extends WhereUnion, R extends ReturnUnion, I extends IncludeUnion> {
  create(data: T): Promise<R>
  getAll(where: U, include?: I): Promise<Array<ReturnUnion>>
  getOne(where: E, include?: I): Promise<R | null>
  updateOne(where: E, data: Partial<T>): Promise<R | null>
  deleteOne(where: E): Promise<R | null>
}
