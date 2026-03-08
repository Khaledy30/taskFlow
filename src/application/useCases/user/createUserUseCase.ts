import { UserEntity } from '../../../domain/entities/user/user.entity'
import { createUserRepository } from '../../repositories/user/createUserRepository'
import { getUserByEmailRepository } from '../../repositories/user/getUserByEmailRepository'

export const createUserUseCase = async ({
  email,
  password,
}: {
  email: string
  password: string
}): Promise<UserEntity> => {
  const userExists = await getUserByEmailRepository({ email })

  if (userExists) {
    throw new Error('Os dados informados são inválidos.')
  }

  UserEntity.validate(email, password)

  const newUser: UserEntity = await createUserRepository({
    email,
    password,
  })

  return newUser
}
