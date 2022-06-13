import { Request, Response } from "express";
import { CreateUserModel } from "../models/CreateUserModel";

export class CreateUserController {
  handle(request: Request, response: Response) {
    const { name, email, password, phone, cpf } = request.body;

    const createUserModel = new CreateUserModel();

    const data = {
      name,
      email,
      password,
      phone,
      cpf
    };

    const user = createUserModel.newUser(data);

    return response.status(201).json(user);
  }
}