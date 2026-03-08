import { UserEntity } from '../../../domain/entities/user/user.entity'
import { prisma } from '../../../infrastructure/database/prisma'

export const getUserByEmailRepository = async ({
  email,
}: {
  email: string
}): Promise<UserEntity | null> => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  })
}
