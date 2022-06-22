import { AppError } from '../errors/AppError';
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
    const userAlreadyExistsWithEmail = await prisma.client.findUnique({
      where: {
        email: data.email
      }
    });

    const userAlreadyExistWithCpf = await prisma.client.findFirst({
      where:{
        cpf: data.cpf
      }
    })

    if(userAlreadyExistsWithEmail) {
      throw new AppError('User with this email already exists');
    }

    if(userAlreadyExistWithCpf) {
      throw new AppError('User with this cpf already exists');
    }

    if(data.name.trim() === "") {                                 
      throw new AppError('Invalid name');
    }

    if(data.password.trim().length < 6 || data.password.trim().length > 30) {
      throw new AppError('Password must be between 6 and 30 characters');
    }

    const user = await prisma.client.create({
      data: {
        name: data.name.trim(),
        email: data.email,
        password: data.password,
        phone: data.phone,
        cpf: data.cpf,
      }
    });

    return user;
  }
}