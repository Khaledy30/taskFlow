import { TaskEntity } from '../../../domain/entities/task/task.entity';
import { getTaskByIdRepository } from '../../repositories/getTaskByIdRepository';

export const getTaskById = async (id: string): Promise<TaskEntity | null> => {
  const task = await getTaskByIdRepository({ id });

  return task;
};
