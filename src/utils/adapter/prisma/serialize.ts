import { Prisma } from '@prisma/client';
import { ISchedule } from '../../../DTO/ISchedule';

export default class PrismaScheduleAdapter {
  public serialize = (data: ISchedule): Prisma.SchedulesCreateInput => {
    const schedule = {
      price: data.price,
      date: new Date(data.date),
      finished: data.finished,
      client: {
        connectOrCreate: {
          where: {
            phone: data.phone,
          },
          create: {
            name: data.name,
            phone: data.phone,
            address_number: data.address_number,
            address_complement: data.address_complement,
            address: {
              connectOrCreate: {
                where: {
                  cep: data.cep,
                },
                create: {
                  cep: data.cep,
                  street: data.street,
                  city: data.city,
                },
              },
            },
          },
        },
      },
      service: {
        connect: {
          id: data.serviceId,
        },
      },
    };
    return schedule;
  };

  public static deserialize = (data: any) => {
    const deserialized = JSON.parse(data);
    return deserialized;
  };
}
