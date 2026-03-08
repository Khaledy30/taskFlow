import { Request, Response } from 'express'
import { completeTaskUseCase } from '../../../application/useCases/task/completeTaskUseCase'

export const completeTaskController = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ error: 'Task id is required' })
  }

  await completeTaskUseCase(id)

  return res.status(200).json({ message: 'Task completed successfully' })
}
