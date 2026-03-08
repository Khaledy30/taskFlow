import { TaskStatus } from '@prisma/client'
import { TaskEntity } from '@domain/entities/task/task.entity'
import { prisma } from '@infrastructure/database/prisma'

export const createTaskRepository = async ({
  taskDescription,
}: {
  taskDescription: string
}): Promise<TaskEntity> => {
  return prisma.task.create({
    data: {
      taskDescription,
      taskStatus: TaskStatus.PENDING,
    },
  })
}
