import { TaskStatus } from '@prisma/client';

export type Task = {
  id: string;
  taskDescription: string;
  createdAt: Date;
  taskStatus: TaskStatus;
};
