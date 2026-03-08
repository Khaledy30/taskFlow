import { TaskEntity } from '../../../domain/entities/task/task.entity'
import { prisma } from '../../../infrastructure/database/prisma'

export const findAllTasksRepository = async (): Promise<TaskEntity[]> => {
  return prisma.task.findMany()
}
