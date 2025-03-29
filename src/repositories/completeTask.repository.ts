import { PrismaClient, Task, TaskStatus } from '@prisma/client';

const prisma = new PrismaClient();

export const completeTaskRepository = async ({
  id,
}: {
  id: string;
}): Promise<Task> => {
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      taskStatus: TaskStatus.COMPLETED,
      completedAt: new Date(),
    },
  });
};
