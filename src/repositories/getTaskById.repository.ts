import { PrismaClient } from '@prisma/client';
import { Task } from '../types';

const prisma = new PrismaClient();

export const getTaskByIdRepository = async ({
  id,
}: {
  id: string;
}): Promise<Task | null> => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};
