import { Router, Request, Response } from 'express';
import { createTaskController } from '../interface/controllers/task/createTask.controller';
import { findAllTasksController } from '../interface/controllers/task/findAllTasks.controller';
import { getTaskByIdController } from '../interface/controllers/task/getTaskById.controller';
import { completeTaskController } from '../interface/controllers/task/completeTask.controller';

const taskRoutes = Router();

taskRoutes.post('/', async (req: Request, res: Response) => {
  await createTaskController(req, res);
});

taskRoutes.get('/', async (req: Request, res: Response) => {
  await findAllTasksController(req, res);
});

taskRoutes.get('/:id', async (req: Request, res: Response) => {
  await getTaskByIdController(req, res);
});

taskRoutes.put('/:id', async (req: Request, res: Response) => {
  await completeTaskController(req, res);
});

export { taskRoutes };
