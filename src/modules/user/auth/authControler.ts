import { Request, Response } from "express";
import { AuthUserUseCase } from "./authUserUseCase";

const bcrypt = require ("bcrypt")

export class AuthControler{
    async handle(req: Request, res: Response){
        const {name, email, password} = req.body;

        const authUserUseCase = new AuthUserUseCase();

        const result = await authUserUseCase.execute({name, email, password});

        // const passwordIsValid = bcrypt.compare(password, result?.password)

        // res.send(passwordIsValid);
        

        if (result && result.password === password) {
            res.json({"value":"true"})
          } else{
            res.json({"value":"false"})
          }

        
    }
}