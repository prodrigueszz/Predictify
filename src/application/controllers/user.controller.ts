import { Request, Response } from "express";
import pgPool from "../../infrastructure/config/database";
import { PostgresUserRepository } from "../../repositories/user/user.repository";
import { CreateUserUsecase } from "../../usecases/user/create.user.usecase";

export class UserController {
  public constructor(){}

  public static async save(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body;

    const Repository = PostgresUserRepository.create(pgPool);
    const CreateService = CreateUserUsecase.create(Repository);

    await CreateService.execute({ name, email, password });

    response.status(201).json({
      message: "sucess"
    })
  }
}