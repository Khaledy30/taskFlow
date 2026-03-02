import { Request, Response } from 'express';
import { createTask } from '../../../application/useCases/task/createTaskUseCase';

export const createTaskController = async (req: Request, res: Response) => {
  const { taskDescription } = req.body;

  if (!taskDescription) {
    return res.status(400).json({ error: 'Task description is required' });
  }

  const task = await createTask(taskDescription);

  return res.status(201).json(task);
};
