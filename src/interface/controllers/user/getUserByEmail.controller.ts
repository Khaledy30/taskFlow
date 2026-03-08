import { Request, Response } from 'express'
import { UserEntity } from '../../../domain/entities/user/user.entity'
import { getUserByEmailUseCase } from '../../../application/useCases/user/getUserByEmailUseCase'

export const getUserByEmailController = async (req: Request, res: Response) => {
  const { email } = req.params

  const user: UserEntity = await getUserByEmailUseCase(email)

  res.status(200).json(user)
}
