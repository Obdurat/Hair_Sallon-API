import {
  Prisma, User, Address, Schedules, Services,
} from '@prisma/client';

type DataUnion = Prisma.UserCreateInput | Prisma.AddressCreateInput | Prisma.SchedulesCreateInput | Prisma.ServicesCreateInput;

type WhereUniqueUnion = Prisma.UserWhereUniqueInput | Prisma.AddressWhereUniqueInput | Prisma.SchedulesWhereUniqueInput | Prisma.ServicesWhereUniqueInput;

type WhereUnion = Prisma.UserWhereInput | Prisma.AddressWhereInput | Prisma.SchedulesWhereInput | Prisma.ServicesWhereInput;

type ReturnUnion = User | Address | Schedules | Services;

export default interface IRepository<T extends DataUnion, E extends WhereUniqueUnion, U extends WhereUnion, R extends ReturnUnion> {
  create(data: T): Promise<R>
  getAll(where: U): Promise<Array<ReturnUnion>>
  getOne(where: E): Promise<ReturnUnion | null>
  updateOne(where: E, data: Partial<T>): Promise<R | null>
  deleteOne(where: E): Promise<R | null>
}
