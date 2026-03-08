import { createUserUseCase } from '../../application/useCases/user/createUserUseCase'
import { prisma } from '../../infrastructure/database/prisma'

describe('createUserUseCase', () => {
  const validUser = {
    email: 'test@example.com',
    password: 'Password1!',
  }

  afterAll(async () => {
    await prisma.user.deleteMany({
      where: {
        email: {
          in: [validUser.email, 'invalid@example.com'],
        },
      },
    })
    await prisma.$disconnect()
  })

  it('should create a user successfully', async () => {
    const user = await createUserUseCase(validUser)

    expect(user).toHaveProperty('id')
    expect(user.email).toBe(validUser.email)
    expect(user).toHaveProperty('createdAt')
    expect(user).toHaveProperty('updatedAt')
  })

  it('should throw an error if user already exists', async () => {
    await expect(createUserUseCase(validUser)).rejects.toThrow(
      'Os dados informados são inválidos.'
    )
  })

  it('should throw an error for invalid email', async () => {
    const invalidEmailUser = {
      email: 'invalid-email',
      password: 'Password1!',
    }

    await expect(createUserUseCase(invalidEmailUser)).rejects.toThrow(
      'Email inválido'
    )
  })

  it('should throw an error for invalid password', async () => {
    const invalidPasswordUser = {
      email: 'invalid@example.com',
      password: 'weak',
    }

    await expect(createUserUseCase(invalidPasswordUser)).rejects.toThrow(
      'Senha inválida. A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial.'
    )
  })
})
