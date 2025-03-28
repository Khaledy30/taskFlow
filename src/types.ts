export enum TaskStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
}

export type Task = {
  id: string;
  taskDescription: string;
  createdAt: Date;
  status: TaskStatus;
};
