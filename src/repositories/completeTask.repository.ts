import { PrismaClient, TaskStatus } from '@prisma/client';

const prisma = new PrismaClient();

export const completeTaskRepository = async ({ id }: { id: string }) => {
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      taskStatus: TaskStatus.COMPLETED,
    },
  });
};
