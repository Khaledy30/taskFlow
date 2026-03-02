import { Request, Response } from 'express';
import { findAllTasks } from '../../../application/useCases/task/findAllTasksUseCase';

export const findAllTasksController = async (req: Request, res: Response) => {
  const tasks = await findAllTasks();

  return res.status(200).json(tasks);
};
