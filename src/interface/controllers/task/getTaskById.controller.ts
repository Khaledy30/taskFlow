import { Request, Response } from 'express'
import { getTaskById } from '@application/useCases/task/getTaskByIdUseCase'

export const getTaskByIdController = async (req: Request, res: Response) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ error: 'Task id is required' })
  }

  const task = await getTaskById(id)

  return res.status(200).json(task)
}
