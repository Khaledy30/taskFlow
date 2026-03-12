import { prisma } from '@infrastructure/database/prisma'
import { TaskStatus } from '@prisma/client'

export const updateTaskStatusRepository = async ({
  id,
  status,
}: {
  id: string
  status: TaskStatus
}): Promise<void> => {
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      status,
    },
  })
}
