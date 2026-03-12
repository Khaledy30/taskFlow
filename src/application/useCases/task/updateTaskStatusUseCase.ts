import { TaskStatus } from '@prisma/client'
import { updateTaskStatusRepository } from '@application/repositories/task/updateTaskStatusRepository'
import { getTaskByIdRepository } from '@application/repositories/task/getTaskByIdRepository'

const validTransitions: Record<TaskStatus, TaskStatus[]> = {
  [TaskStatus.TODO]: [TaskStatus.IN_PROGRESS],
  [TaskStatus.IN_PROGRESS]: [
    TaskStatus.TODO,
    TaskStatus.COMPLETED,
    TaskStatus.CANCELLED,
  ],
  [TaskStatus.COMPLETED]: [],
  [TaskStatus.CANCELLED]: [],
}

export const updateTaskStatusUseCase = async ({
  id,
  status,
}: {
  id: string
  status: TaskStatus
}): Promise<void> => {
  const task = await getTaskByIdRepository({ id })

  if (!task) {
    throw new Error('Tarefa não encontrada')
  }

  const allowedTransitions = validTransitions[task.status]

  if (!allowedTransitions.includes(status)) {
    throw new Error(
      `Não é possível alterar o status de ${task.status} para ${status}`
    )
  }

  await updateTaskStatusRepository({ id, status })
}
