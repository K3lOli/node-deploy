import { prisma } from "../../../prisma/client";
import { UserDTO } from "../dto/userDTO";

export class CreateUserUseCase{
    async execute({name, email, password}:UserDTO ) { //função assíncrona que cria o novo usuário
        const userAlreadyExist = await prisma.user.findUnique({ //busca um unico usuário com aquele email
            where:{
                email
            }
        });

        if(userAlreadyExist){
            throw new Error("Usuário já cadastrado") //erro caso o usuário já exista no banco
        }
        const user = await prisma.user.create({ //se o usuário ainda não estiver cadastrado os dados dele são registrados no banco 
            data:{
                name,
                email,
                password,
            }
        })
    }
}