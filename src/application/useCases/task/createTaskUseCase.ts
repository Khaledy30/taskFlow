import { TaskEntity } from '@domain/entities/task/task.entity'
import { createTaskRepository } from '@application/repositories/task/createTaskRepository'

export const createTaskUseCase = async (
  taskDescription: string
): Promise<TaskEntity> => {
  const newTask: TaskEntity = await createTaskRepository({ taskDescription })

  return newTask
}
