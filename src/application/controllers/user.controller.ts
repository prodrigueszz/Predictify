import { Request, Response } from "express";
import { prisma } from "../../infra/config/prisma.client";
import { PrismaUserRepository } from "../../repositories/user/user.repository";
import { CreateUserUsecase } from "../../usecases/user/create.user.usecase";
import { DeleteUserUsecase } from "../../usecases/user/delete-user.usecase";
import { FindUserUsecase } from "../../usecases/user/find-user.usecase";

export class UserController {
  private static repository: PrismaUserRepository;

  private static createRepository(): PrismaUserRepository {
    if(!UserController.repository){
      UserController.repository = PrismaUserRepository.create(prisma);
    }

    return UserController.repository;
  }

  public static async postHandler(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body;

    const CreateService = CreateUserUsecase.create(UserController.createRepository());

    const { createdAt } = await CreateService.execute({ name, email, password });

    response.status(201).json({
      message: "sucess",
      createdAt: createdAt
    })
  }

  public static async deleteHandler(request: Request, response: Response): Promise<void>{
    const { id } = request.params;

    const idFromRequest = Number(id);

    if (isNaN(idFromRequest)) {
      response.status(400).json({
        message: "error",
        error: "This id is not valid"
      }) 
    }

    const DeleteService = DeleteUserUsecase.create(UserController.createRepository());

    const { deletedAt } = await DeleteService.execute({ id: idFromRequest });

    response.status(200).json({
      message: "sucess",
      deletedAt: id
    })
  }

  public static async getHandler(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const numberId = Number(id)

    if (isNaN(numberId)) {
      response.status(400).json({
        message: "error",
        error: "This id is not valid",
        numId: numberId
      })
      return
    }

    const FindService = FindUserUsecase.create(UserController.createRepository());

    const { name, email } = await FindService.execute({ id: numberId });

    response.status(200).json({
      message: "sucess",
      user: {
        name,
        email
      } 
    })
  }
}