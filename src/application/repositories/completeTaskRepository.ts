import { TaskStatus } from '@prisma/client'
import { TaskEntity } from '../../domain/entities/task/task.entity'
import { prisma } from '../../infrastructure/database/prisma'

export const completeTaskRepository = async ({
  id,
}: {
  id: string
}): Promise<TaskEntity> => {
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      taskStatus: TaskStatus.COMPLETED,
      completedAt: new Date(),
    },
  })
}
