import express, {NextFunction, Request, Response} from "express";
import { routes } from "./routes";

const cors = require('cors');

const corsOptions ={
    // origin:'http://localhost:3000/Cadastro', 
    // credentials:true,            //access-control-allow-credentials:true
    // optionSuccessStatus:200,
}

const app = express();

app.use(cors({ // o midleware cors deve ser adicionado antes dos outros para não haver riscos de ocorrer erros
    origin: true
));

app.use(express.json());

app.use(routes);

app.use((err:Error, request: Request, response: Response) => {
    return response.status(500).json({
        status: "error",
        message: `Internal server error -${err.message}`,
    });
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}, () => console.log("Server is running"));