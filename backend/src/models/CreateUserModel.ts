import { prisma } from '../prisma';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  cpf?: string;
  isBan?: boolean;
}

export class CreateUserModel {
  async newUser(data: User) {
    const userAlreadyExists = await prisma.client.findUnique({
      where: {
        email: data.email
      }
    });

    if(userAlreadyExists) {
      throw new Error();
    }

    const user = await prisma.client.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        cpf: data.cpf,
      }
    });

    return user;
  }
}