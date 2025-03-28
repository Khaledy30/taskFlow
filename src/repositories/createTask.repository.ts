import { PrismaClient, TaskStatus } from '@prisma/client';
import { Task } from '../types';

const prisma = new PrismaClient();

export const createTaskRepository = async ({
  taskDescription,
}: {
  taskDescription: string;
}): Promise<Task> => {
  return prisma.task.create({
    data: {
      taskDescription,
      taskStatus: TaskStatus.PENDING,
    },
  });
};
