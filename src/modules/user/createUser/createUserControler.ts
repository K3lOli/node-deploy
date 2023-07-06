import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserControler{
    async handle(req: Request, res: Response){ //frunção assíncrona de requisição e resposta
        const {name, email, password} = req.body; //as constantes são extraídas a partir da requisição ao body

        const createUserUseCase = new CreateUserUseCase(); //cria um novo usuário a partir da função CreateUserUserCase

        const result = await createUserUseCase.execute({name, email, password}); //a funcão execute é chamada para a criação de um novo usuário

        return res.status(201).json(result) // o resultado do execute é retornado como arquivo json
    }
}