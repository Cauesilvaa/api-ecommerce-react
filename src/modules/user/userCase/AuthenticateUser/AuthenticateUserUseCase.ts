import { user } from "@prisma/client";
import { CreateUserDTO } from "../../dto/CreateUserDTO";
import { prisma } from "../../../../prisma/client/PrismaClient";
import { BadRequest, NotFound } from "../../../../midlewares/error/apiErrors";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IRequest {
    name: string,
    password: string
}
export class AuthenticateUserUseCase {
    async execute({name, password}: IRequest) {

        if (!name || !password) throw new BadRequest("Necessario preencher todos os parametros")
        
        const userAlreadyExists = await prisma.user.findFirst({ where: { name }})

        if (!userAlreadyExists) throw new NotFound("Usuario ou senha incorretos")

        // compara senha que foi passada com a senha criptografada
        const descryptedPassowrd = await compare(password, userAlreadyExists.password)
        if (!descryptedPassowrd) throw new NotFound("Usuario ou senha incorretos")

        const token = sign({hash: userAlreadyExists.id}, "45999e1d-abc9-4051-8846-706a4039fcc0", {expiresIn: "20s"})

        return { token }
    }
}