import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./getAllUsersUseCase";

export class GetAllUsersControler{
    async handle(req: Request, res: Response){
        const getAllUsersCase = new GetAllUsersUseCase();

        const result = await getAllUsersCase.execute();

        return res.status(201).json(result);
    }
}