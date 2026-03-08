import { createUserUseCase } from '@application/useCases/user/createUserUseCase'
import { getUserByEmailUseCase } from '@application/useCases/user/getUserByEmailUseCase'
import { prisma } from '@infrastructure/database/prisma'

describe('getUserByEmailUseCase', () => {
  const user = {
    email: 'test_get@example.com',
    password: 'Password1!',
  }

  beforeAll(async () => {
    await prisma.user.deleteMany({
      where: {
        email: user.email,
      },
    })

    await createUserUseCase(user)
  })

  afterAll(async () => {
    await prisma.user.delete({
      where: {
        email: user.email,
      },
    })
    await prisma.$disconnect()
  })

  it('should return a user if email exists', async () => {
    const foundUser = await getUserByEmailUseCase(user.email)

    expect(foundUser).toHaveProperty('id')
    expect(foundUser.email).toBe(user.email)
  })

  it('should throw an error if user does not exist', async () => {
    const nonExistentEmail = 'nonexistent@example.com'

    await expect(getUserByEmailUseCase(nonExistentEmail)).rejects.toThrow(
      'User not found'
    )
  })
})
