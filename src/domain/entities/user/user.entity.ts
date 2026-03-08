import { isValidEmail, isValidPassword } from '../../utils/validators'

export class UserEntity {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {
    UserEntity.validate(email, password)
  }

  static validate(email: string, password: string) {
    if (!isValidEmail(email)) {
      throw new Error('Email inválido')
    }

    if (!isValidPassword(password)) {
      throw new Error(
        'Senha inválida. A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial.'
      )
    }
  }
}
