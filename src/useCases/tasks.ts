import { createTaskRepository } from '../repositories/createTask.repository';
import { findAllTasksRepository } from '../repositories/findAllTasks.repository';
import { Task } from '../types';
import { getTaskByIdRepository } from '../repositories/getTaskById.repository';
import { completeTaskRepository } from '../repositories/completeTask.repository';
import { TaskStatus } from '@prisma/client';

export const createTask = async (taskDescription: string): Promise<Task> => {
  const newTask: Task = await createTaskRepository({ taskDescription });

  return newTask;
};

export const findAllTasks = async (): Promise<Task[]> => {
  return findAllTasksRepository();
};

export const getTaskById = async (id: string): Promise<Task | null> => {
  const task = await getTaskByIdRepository({ id });

  return task;
};

export const completeTask = async (id: string): Promise<boolean> => {
  const task = await getTaskByIdRepository({ id });

  if (!task) {
    throw new Error('Tarefa não encontrada');
  }

  if (task.taskStatus === TaskStatus.COMPLETED) {
    throw new Error('Tarefa já está completa');
  }

  await completeTaskRepository({ id });

  return true;
};
