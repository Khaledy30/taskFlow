import { createTaskUseCase } from '../../application/useCases/task/createTaskUseCase'
import { TaskEntity } from '../../domain/entities/task/task.entity'
import { prisma } from '../../infrastructure/database/prisma'

describe('createTaskUseCase', () => {
  let createdTask: TaskEntity

  it('should create a new task', async () => {
    const taskDescription1 = 'Test task'

    createdTask = await createTaskUseCase(taskDescription1)

    expect(createdTask).toBeDefined()
    expect(createdTask.taskDescription).toBe(taskDescription1)
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
