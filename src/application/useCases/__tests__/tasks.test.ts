import { TaskEntity } from '../../../domain/entities/task/task.entity';
import { createTask } from '../task/createTaskUseCase';
import { getTaskById } from '../task/getTaskByIdUseCase';
import { completeTask } from '../task/completeTaskUseCase';
import { TaskStatus } from '@prisma/client';
import { prisma } from '../../../infrastructure/database/prisma';

describe('Task Use Cases Integration Tests', () => {
  let createdTask: TaskEntity;
  const taskDescription1 = 'Test task';

  it('should create a task', async () => {
    const task = await createTask(taskDescription1);
    createdTask = task;

    expect(task.taskDescription).toBe(taskDescription1);
    expect(task.taskStatus).toBe(TaskStatus.PENDING);
    expect(task.createdAt).toBeDefined();
    expect(task.id).toBeDefined();
  });

  it('should get a task by id', async () => {
    const task = await getTaskById(createdTask.id);

    expect(task?.id).toBe(createdTask?.id);
    expect(task?.createdAt).toBeDefined();
    expect(task?.taskStatus).toBe(TaskStatus.PENDING);
    expect(task?.taskDescription).toBe(taskDescription1);
  });

  it('should complete a task', async () => {
    await completeTask(createdTask?.id);

    const completedTask = await getTaskById(createdTask.id);

    expect(completedTask?.taskStatus).toBe(TaskStatus.COMPLETED);
    expect(completedTask?.completedAt).toBeDefined();
  });

  afterAll(async () => {
    if (createdTask?.id) {
      await prisma.task.delete({
        where: {
          id: createdTask.id,
        },
      });
    }
    await prisma.$disconnect();
  });
});
