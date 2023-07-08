import { UserDTO } from "../dto/userDTO";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export class AuthUserUseCase {
  async execute({ name, email, password }: UserDTO) {
    const userAlreadyExist = await prisma.user.findUnique({
      //busca um unico usuário com aquele email
      where: {
        email
      },
    });

    if (userAlreadyExist) {
      const { password: password } = userAlreadyExist;
      return {
        password: password,
      };
    }
  }
}
