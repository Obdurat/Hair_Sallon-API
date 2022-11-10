/* eslint-disable no-await-in-loop */
import { PrismaClient } from '@prisma/client';
import serviceSource from './data.sources/services.source.json';
import usersSource from './data.sources/users.source.json';
import addressSource from './data.sources/address.source.json';
import schedulesSource from './data.sources/schedules.source.json';

const prisma = new PrismaClient();

const Seeder = async () => {
  for (let i = 0; i < schedulesSource.length; i += 1) {
    await prisma.schedules.create({
      data: {
        price: schedulesSource[i].price,
        date: new Date(schedulesSource[i].date),
        finished: schedulesSource[i].finished,
        client: { create: { ...usersSource[i], address: { create: { ...addressSource[i] } } } },
        service: { create: { ...serviceSource[i] } },
      },
    });
  }
  return 'Entries created successfully';
};

Seeder()
  .then((result) => console.log(`\n${result}`))
  .catch((err) => console.log(`\n${err}`))
  .finally(() => prisma.$disconnect());
