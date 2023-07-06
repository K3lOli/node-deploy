import { Router } from "express";
import { userRoutes } from "./user.routes";
import { authRoutes } from "./auth.routes";

const routes = Router(); //cria uma nova rota

routes.use("/users", userRoutes);
routes.use("/auth", authRoutes);

export {routes};