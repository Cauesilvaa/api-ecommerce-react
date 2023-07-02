import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
    async handle(req: Request, res: Response) {

        const {
            name,
            email,
            password,
            lastName,
            cpf,        
            country,    
            cep,        
            street,     
            complement, 
            city,       
            state,
            birth
        } = req.body

        const createUserUseCase = new CreateUserUseCase()

        const result = await createUserUseCase.execute({
            name,
            email,
            password,
            lastName,
            cpf,        
            country,    
            cep,        
            street,     
            complement, 
            city,       
            state,
            birth
        })

        return res.status(201).json(result)
    }
}