import { Router } from "express";
import { AuthControler } from "../modules/user/auth/authControler";

const authControler = new AuthControler();

const authRoutes = Router();

authRoutes.post("/", authControler.handle);

export {authRoutes};