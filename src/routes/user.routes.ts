import { Router, Request, Response } from 'express'
import { createUserController } from '../interface/controllers/user/createUser.controller'

const userRoutes = Router()

userRoutes.post('/', async (req: Request, res: Response) => {
  await createUserController(req, res)
})

export { userRoutes }
