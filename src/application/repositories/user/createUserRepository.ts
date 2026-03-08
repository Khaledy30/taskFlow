import { UserEntity } from '../../../domain/entities/user/user.entity'
import { prisma } from '../../../infrastructure/database/prisma'

export const createUserRepository = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<UserEntity> => {
  return prisma.user.create({
    data: {
      email,
      password,
    },
  })
}
