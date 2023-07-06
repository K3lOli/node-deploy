import { UserDTO } from "../dto/userDTO";
import { prisma } from "../../../prisma/client";

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
