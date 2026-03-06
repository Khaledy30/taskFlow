import { TaskEntity } from '../../domain/entities/task/task.entity'
import { prisma } from '../../infrastructure/database/prisma'

export const getTaskByIdRepository = async ({
  id,
}: {
  id: string
}): Promise<TaskEntity | null> => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  })
}
