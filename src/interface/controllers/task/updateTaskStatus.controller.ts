import { Request, Response } from 'express'
import { updateTaskStatusUseCase } from '@application/useCases/task/updateTaskStatusUseCase'
import { TaskStatus } from '@prisma/client'

export const completeTaskController = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ error: 'Task id is required' })
  }

  await updateTaskStatusUseCase({ id, status: TaskStatus.COMPLETED })

  return res.status(200).json({ message: 'Task completed successfully' })
}
