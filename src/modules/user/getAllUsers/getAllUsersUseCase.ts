import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class GetAllUsersUseCase{
    async execute(){
        const users = await prisma.user.findMany({

        });

        return users;
    }
}