import { Request, Response } from 'express';
import { createTask } from '../../application/useCases/task/createTaskUseCase';
import { findAllTasks } from '../../application/useCases/task/findAllTasksUseCase';
import { getTaskById } from '../../application/useCases/task/getTaskByIdUseCase';
import { completeTask } from '../../application/useCases/task/completeTaskUseCase';

export const createTaskController = async (req: Request, res: Response) => {
  const { taskDescription } = req.body;

  if (!taskDescription) {
    return res.status(400).json({ error: 'Task description is required' });
  }

  const task = await createTask(taskDescription);

  return res.status(201).json(task);
};

export const findAllTasksController = async (req: Request, res: Response) => {
  const tasks = await findAllTasks();

  return res.status(200).json(tasks);
};

export const getTaskByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Task id is required' });
  }

  const task = await getTaskById(id);

  return res.status(200).json(task);
};

export const completeTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: 'Task id is required' });
  }

  await completeTask(id);

  return res.status(200).json({ message: 'Task completed successfully' });
};
