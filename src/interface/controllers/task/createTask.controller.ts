import { Request, Response } from 'express'
import { createTaskUseCase } from '@application/useCases/task/createTaskUseCase'

export const createTaskController = async (req: Request, res: Response) => {
  const { taskDescription, taskTitle } = req.body

  if (!taskDescription) {
    return res.status(400).json({ error: 'Task description is required' })
  }

  const task = await createTaskUseCase({ taskDescription, taskTitle })

  return res.status(201).json(task)
}
