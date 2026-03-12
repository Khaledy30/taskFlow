import { createTaskUseCase } from '@application/useCases/task/createTaskUseCase'
import { TaskEntity } from '@domain/entities/task/task.entity'
import { prisma } from '@infrastructure/database/prisma'
import { TaskStatus } from '@prisma/client'

describe('createTaskUseCase', () => {
  let createdTask: TaskEntity

  it('should create a new task', async () => {
    const taskDescription1 = 'Test task'

    createdTask = await createTaskUseCase({
      taskDescription: taskDescription1,
      taskTitle: 'Test task',
    })

    expect(createdTask).toBeDefined()
    expect(createdTask.description).toBe(taskDescription1)
    expect(createdTask.status).toBe(TaskStatus.TODO)
  })

  afterAll(async () => {
    if (createdTask?.id) {
      await prisma.task.delete({
        where: {
          id: createdTask.id,
        },
      })
    }
    await prisma.$disconnect()
  })
})
