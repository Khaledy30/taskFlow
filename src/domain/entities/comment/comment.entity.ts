export class CommentEntity {
  constructor(
    public id: string,
    public content: string,
    public taskId: string,
    public authorId: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
