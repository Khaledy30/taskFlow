import { TaskEntity } from '@domain/entities/task/task.entity'
import { findAllTasksRepository } from '@application/repositories/task/findAllTasksRepository'

export const findAllTasks = async (): Promise<TaskEntity[]> => {
  return findAllTasksRepository()
}
