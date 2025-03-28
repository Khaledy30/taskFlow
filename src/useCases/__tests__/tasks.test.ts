import { createTask, getTaskById, completeTask } from '../tasks';
import { Task, TaskStatus, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('Task Use Cases Integration Tests', () => {
  let createdTask: Task;
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
