import { TaskStatus } from '@prisma/client'
import { createTaskUseCase } from '@application/useCases/task/createTaskUseCase'
import { TaskEntity } from '@domain/entities/task/task.entity'
import { updateTaskStatusUseCase } from '@application/useCases/task/updateTaskStatusUseCase'
import { getTaskById } from '@application/useCases/task/getTaskByIdUseCase'
import { prisma } from '@infrastructure/database/prisma'

describe('updateTaskStatusUseCase', () => {
  let createdTask: TaskEntity
  const taskDescription1 = 'Test task'

  it('should create a task', async () => {
    const task = await createTaskUseCase({
      taskDescription: taskDescription1,
      taskTitle: 'Test task',
    })

    createdTask = task

    expect(task.description).toBe(taskDescription1)
    expect(task.status).toBe(TaskStatus.TODO)
    expect(task.createdAt).toBeDefined()
    expect(task.id).toBeDefined()
  })

  it('should update task status to in progress', async () => {
    await updateTaskStatusUseCase({
      id: createdTask?.id,
      status: TaskStatus.IN_PROGRESS,
    })

    const inProgressTask = await getTaskById(createdTask.id)

    expect(inProgressTask?.status).toBe(TaskStatus.IN_PROGRESS)
  })

  it('should update task status to completed', async () => {
    await updateTaskStatusUseCase({
      id: createdTask?.id,
      status: TaskStatus.COMPLETED,
    })

    const completedTask = await getTaskById(createdTask.id)

    expect(completedTask?.status).toBe(TaskStatus.COMPLETED)
    expect(completedTask?.completedAt).toBeDefined()
  })

  it('should not allow invalid status transition', async () => {
    // Tenta voltar de COMPLETED para IN_PROGRESS (transição inválida segundo as regras)
    await expect(
      updateTaskStatusUseCase({
        id: createdTask?.id,
        status: TaskStatus.IN_PROGRESS,
      })
    ).rejects.toThrow(
      `Não é possível alterar o status de ${TaskStatus.COMPLETED} para ${TaskStatus.IN_PROGRESS}`
    )
  })

  it('should not allow update status for non-existent task', async () => {
    const nonExistentId = 'non-existent-id'
    await expect(
      updateTaskStatusUseCase({
        id: nonExistentId,
        status: TaskStatus.COMPLETED,
      })
    ).rejects.toThrow('Tarefa não encontrada')
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
