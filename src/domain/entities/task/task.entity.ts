import { TaskStatus } from '@prisma/client';

export class TaskEntity {
  constructor(
    public id: string,
    public taskDescription: string,
    public taskStatus: TaskStatus,
    public createdAt: Date,
    public completedAt: Date | null
  ) {}
}
