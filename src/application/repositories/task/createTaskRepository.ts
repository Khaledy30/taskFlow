import { TaskStatus } from '@prisma/client'
import { TaskEntity } from '@domain/entities/task/task.entity'
import { prisma } from '@infrastructure/database/prisma'

export const createTaskRepository = async ({
  taskDescription,
  taskTitle,
}: {
  taskDescription: string
  taskTitle: string
}): Promise<TaskEntity> => {
  return prisma.task.create({
    data: {
      title: taskTitle,
      description: taskDescription,
      status: TaskStatus.TODO,
    },
  })
}
