import { TaskEntity } from '../../../domain/entities/task/task.entity'
import { findAllTasksRepository } from '../../repositories/task/findAllTasksRepository'

export const findAllTasks = async (): Promise<TaskEntity[]> => {
  return findAllTasksRepository()
}
