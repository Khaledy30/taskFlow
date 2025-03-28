import { PrismaClient } from '@prisma/client';
import { TaskStatus } from '../types';

const prisma = new PrismaClient();

export const completeTaskRepository = async ({ id }: { id: string }) => {
  return prisma.task.update({
    where: {
      id,
      taskStatus: TaskStatus.COMPLETED,
    },
  });
};
