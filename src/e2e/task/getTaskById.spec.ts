import { TaskStatus } from '@prisma/client'
import { createTaskUseCase } from '@application/useCases/task/createTaskUseCase'
import { TaskEntity } from '@domain/entities/task/task.entity'
import { getTaskById } from '@application/useCases/task/getTaskByIdUseCase'
import { prisma } from '@infrastructure/database/prisma'

describe('getTaskByIdUseCase', () => {
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

  it('should get a task by id', async () => {
    const task = await getTaskById(createdTask.id)

    expect(task?.id).toBe(createdTask?.id)
    expect(task?.createdAt).toBeDefined()
    expect(task?.taskStatus).toBe(TaskStatus.PENDING)
    expect(task?.taskDescription).toBe(taskDescription1)
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
