import { Router } from "express";
import { CreateUserController } from "../../modules/user/userCase/createUser/CreateUserController";

const userRoutes = Router()

const createUserController = new CreateUserController()

userRoutes.post('/create', createUserController.handle)

export { userRoutes }