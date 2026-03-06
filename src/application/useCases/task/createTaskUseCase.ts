import { TaskEntity } from '../../../domain/entities/task/task.entity'
import { createTaskRepository } from '../../repositories/createTaskRepository'

export const createTask = async (
  taskDescription: string
): Promise<TaskEntity> => {
  const newTask: TaskEntity = await createTaskRepository({ taskDescription })

  return newTask
}
