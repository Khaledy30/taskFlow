import { Request, Response } from 'express'
import { completeTask } from '../../../application/useCases/task/completeTaskUseCase'

export const completeTaskController = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ error: 'Task id is required' })
  }

  await completeTask(id)

  return res.status(200).json({ message: 'Task completed successfully' })
}
