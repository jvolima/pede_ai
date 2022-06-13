import crypto from 'node:crypto';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  isBan?: boolean;
}

export class CreateUserModel {
  static users: User[] = [];

  newUser(data: User) {
    const id = new Date().getTime();

    const user = {
      id: id,
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      cpf: data.cpf,
      isBan: false
    }

    CreateUserModel.users.push(user);

    return user;
  }
}