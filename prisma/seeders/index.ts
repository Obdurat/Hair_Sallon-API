/* eslint-disable no-await-in-loop */
import { PrismaClient } from '@prisma/client';
import serviceSource from './data.sources/services.source.json';
import usersSource from './data.sources/users.source.json';
import addressSource from './data.sources/address.source.json';

const prisma = new PrismaClient();

const schedulesSeeder = async () => {
  for (let i = 0; i < usersSource.length; i += 1) {
    await prisma.schedules.create({
      data: {
        client: { create: { ...usersSource[i], address: { create: { ...addressSource[i] } } } },
        service: { create: { ...serviceSource[i] } },
      },
    });
  }
  return 'Entries created successfully';
};

schedulesSeeder()
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => prisma.$disconnect());
