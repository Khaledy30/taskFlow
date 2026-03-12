import { TaskEntity } from '@domain/entities/task/task.entity'
import { createTaskRepository } from '@application/repositories/task/createTaskRepository'

export const createTaskUseCase = async ({
  taskDescription,
  taskTitle,
}: {
  taskDescription: string
  taskTitle: string
}): Promise<TaskEntity> => {
  const newTask: TaskEntity = await createTaskRepository({
    taskDescription,
    taskTitle,
  })

  return newTask
}
