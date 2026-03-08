import { TaskStatus } from '@prisma/client'
import { createTaskUseCase } from '@application/useCases/task/createTaskUseCase'
import { TaskEntity } from '@domain/entities/task/task.entity'
import { completeTaskUseCase } from '@application/useCases/task/completeTaskUseCase'
import { getTaskById } from '@application/useCases/task/getTaskByIdUseCase'
import { prisma } from '@infrastructure/database/prisma'

describe('completeTaskUseCase', () => {
  let createdTask: TaskEntity
  const taskDescription1 = 'Test task'

  it('should create a task', async () => {
    const task = await createTaskUseCase(taskDescription1)

    createdTask = task

    expect(task.taskDescription).toBe(taskDescription1)
    expect(task.taskStatus).toBe(TaskStatus.PENDING)
    expect(task.createdAt).toBeDefined()
    expect(task.id).toBeDefined()
  })

  it('should complete a task', async () => {
    await completeTaskUseCase(createdTask?.id)

    const completedTask = await getTaskById(createdTask.id)

    expect(completedTask?.taskStatus).toBe(TaskStatus.COMPLETED)
    expect(completedTask?.completedAt).toBeDefined()
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
