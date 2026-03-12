import { TaskStatus } from '@prisma/client'
import { CommentEntity } from '@domain/entities/comment/comment.entity'

export class TaskEntity {
  constructor(
    public id: string,
    public title: string,
    public description: string | null,
    public status: TaskStatus,
    public estimate: number | null,
    public assigneeId: string | null,
    public createdById: string | null,
    public createdAt: Date,
    public updatedAt: Date,
    public completedAt: Date | null,
    public comments?: CommentEntity[]
  ) {}
}
