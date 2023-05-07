import { Request, Response, request } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { name, password } = req.body;

        const authenticateUserUseCase = new AuthenticateUserUseCase()

        const result = await authenticateUserUseCase.execute({name, password})

        return res.status(200).json(result)
    }
}