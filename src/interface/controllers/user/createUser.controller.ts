import { Request, Response } from 'express'
import { createUserUseCase } from '@application/useCases/user/createUserUseCase'
import { UserEntity } from '@domain/entities/user/user.entity'

export const createUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user: UserEntity = await createUserUseCase({
    email,
    password,
  })

  res.status(201).json(user)
}
