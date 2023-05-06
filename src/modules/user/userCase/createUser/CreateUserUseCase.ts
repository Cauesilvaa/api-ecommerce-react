import { user } from '@prisma/client'
import { prisma } from '../../../../prisma/client/PrismaClient'
import { CreateUserDTO } from '../../dto/CreateUserDTO'
import { hash } from 'bcryptjs'

export class CreateUserUseCase {

    async execute({name, email, password}: CreateUserDTO): Promise<user> {

        if (!name || !email || !password) throw new Error("Necessario preencher todas as informações")

        const userAlreadyExist = await prisma.user.findUnique({ where: { email }})

        if (userAlreadyExist) throw new Error("Usuario ja existente")

        const passowrdHash = await hash(password, 8)
        const user = await prisma.user.create({data: {name, email, password: passowrdHash}})

        return user
    }
}