import { TaskStatus } from '@prisma/client';

export type Task = {
  id: string;
  taskDescription: string;
  taskStatus: TaskStatus;
  createdAt: Date;
  completedAt: Date | null;
};
