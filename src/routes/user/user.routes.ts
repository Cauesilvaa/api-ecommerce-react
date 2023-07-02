import { Router } from "express";
import { CreateUserController } from "../../modules/user/userCase/createUser/CreateUserController";
import { AuthenticateUserController } from "../../modules/user/userCase/AuthenticateUser/AuthenticateUserController";
import { ensureAuthenticate } from "../../midlewares/authenticate/authMidleware";

const userRoutes = Router()

const createUserController = new CreateUserController()
const authenticateUserController  = new AuthenticateUserController()

userRoutes.post('/create', /*ensureAuthenticate,*/ createUserController.handle)
userRoutes.post('/login', authenticateUserController.handle)

export { userRoutes }