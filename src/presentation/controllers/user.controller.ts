import { Request, Response } from "express";
import { CreateUserUsecase } from "../../domain/usecases/user/create.user.usecase";
import { DeleteUserUsecase } from "../../domain/usecases/user/delete-user.usecase";
import { FindUserUsecase } from "../../domain/usecases/user/find-user.usecase";
import { prisma } from "../../infra/config/prisma.client";
import { PrismaUserRepository } from "../../repositories/user/user.repository";

export class UserController {
  private static repository: PrismaUserRepository;

  private static createRepository(): PrismaUserRepository {
    if(!UserController.repository){
      UserController.repository = new PrismaUserRepository(prisma);
    }

    return UserController.repository;
  }

  public static async createHandler(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body;

    const createService = new CreateUserUsecase(UserController.createRepository());

    const { createdAt } = await createService.execute({ name, email, password });

    response.status(201).json({
      message: "success",
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
      return; 
    }

    const deleteService = new DeleteUserUsecase(UserController.createRepository());

    await deleteService.execute({ id: idFromRequest });

    response.status(200).json({
      message: "success",
    })
  }

  public static async getByIdHandler(request: Request, response: Response): Promise<void> {
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

    const findService = new FindUserUsecase(UserController.createRepository());

    const { name, email } = await findService.execute({ id: numberId });

    response.status(200).json({
      message: "success",
      user: {
        name,
        email
      } 
    })
  }
}