import { TaskStatus } from '@prisma/client';
import { completeTaskRepository } from '../../repositories/completeTaskRepository';
import { getTaskByIdRepository } from '../../repositories/getTaskByIdRepository';

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
