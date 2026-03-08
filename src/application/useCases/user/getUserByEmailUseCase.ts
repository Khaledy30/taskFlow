import { getUserByEmailRepository } from '../../repositories/user/getUserByEmailRepository'

export const getUserByEmailUseCase = async (email: string) => {
  const user = await getUserByEmailRepository({ email })

  if (!user) {
    throw new Error('User not found')
  }

  return user
}
