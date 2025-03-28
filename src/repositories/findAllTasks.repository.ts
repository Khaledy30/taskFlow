import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findAllTasksRepository = async () => {
  return prisma.task.findMany();
};
