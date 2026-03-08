import { UserEntity } from '../../../domain/entities/user/user.entity'
import { createUserRepository } from '../../repositories/user/createUserRepository'

export const createUserUseCase = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<UserEntity> => {
  const newUser: UserEntity = await createUserRepository({
    email,
    password,
  })

  return newUser
}
