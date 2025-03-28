import { PrismaClient, Task } from '@prisma/client';

const prisma = new PrismaClient();

export const findAllTasksRepository = async (): Promise<Task[]> => {
  return prisma.task.findMany();
};
