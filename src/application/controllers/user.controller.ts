import { Request, Response } from "express";
import pgPool from "../../infrastructure/config/database";
import { PostgresUserRepository } from "../../repositories/user/user.repository";
import { CreateUserUsecase } from "../../usecases/user/create.user.usecase";
import { DeleteUserUsecase } from "../../usecases/user/delete-user.usecase";

export class UserController {
  private static repository: PostgresUserRepository;

  private static createRepository(): PostgresUserRepository {
    if(!UserController.repository){
      UserController.repository = PostgresUserRepository.create(pgPool);
    }

    return UserController.repository;
  }

  public static async save(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body;

    const CreateService = CreateUserUsecase.create(UserController.createRepository());

    const { createdAt } = await CreateService.execute({ name, email, password });

    response.status(201).json({
      message: "sucess",
      createdAt: createdAt
    })
  }

  public static async delete(request: Request, response: Response){
    const { id } = request.params;

    const DeleteService = DeleteUserUsecase.create(UserController.createRepository());

    const { deletedAt } = await DeleteService.execute({ id });

    response.status(204).json({
      message: "sucess",
      deleteAt: deletedAt
    })
  }
}