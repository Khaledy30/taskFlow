import { Router, Request, Response } from 'express';
import {
  completeTaskController,
  createTaskController,
  findAllTasksController,
  getTaskByIdController,
} from '../controllers/tasks.controller';

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
