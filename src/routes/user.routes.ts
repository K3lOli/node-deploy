import { Router } from "express";
import { CreateUserControler } from "../modules/user/createUser/createUserControler";
import { GetAllUsersControler } from "../modules/user/getAllUsers/getAllUsersControler";

const createUserControler = new CreateUserControler(); //armazena o resultado de uma instância da função CreateUserControler
const getAllUsersControler = new GetAllUsersControler();

const userRoutes = Router();  //cria as rotas a partir do router do express

userRoutes.post("/", createUserControler.handle); //é definida uma rota do tipo post na raiz so userRoutes. Quando uma requisição do tipo POST for feita para essa rota, o método hancle será executado para lidar com a rquisição
userRoutes.get("/", getAllUsersControler.handle);

export  {userRoutes}; // exporta a rota

