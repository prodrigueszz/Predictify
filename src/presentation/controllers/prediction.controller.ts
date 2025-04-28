import { Request, Response } from "express";
import { CreatePredictionUsercase } from "../../domain/usecases/prediction/create-prediction.usecase";
import { DeletePredictionUsecase } from "../../domain/usecases/prediction/delete-prediction.usecase";
import FindPredictionUsecase from "../../domain/usecases/prediction/find-prediction.usecase";
import ListPredictionUsecase from "../../domain/usecases/prediction/list-prediction.usecase";
import { prisma } from "../../infra/config/prisma.client";
import { PrismaPredictionRepository } from "../../repositories/predictions/prediction.repository";

export class PredictionController {
  private static repository: PrismaPredictionRepository;

  private static getRepository(): PrismaPredictionRepository {
    if(!PredictionController.repository){
      PredictionController.repository = new PrismaPredictionRepository(prisma);
    }

    return PredictionController.repository;
  }

  public static async createHandler(request: Request, response: Response): Promise<void> {
    const { authorId, matchId, homeTeamScore, awayTeamScore, winner, status } = request.body;

    const createService = new CreatePredictionUsercase(PredictionController.getRepository());
    const output = await createService.execute({
      authorId,
      matchId,
      homeTeamScore,
      awayTeamScore,
      winner,
      status
    })

    const { createdAt } = output;

    response.status(201).json({
      message: "success",
      prediction_properties: {
        createdAt,
        status
      } 
    })
  }

  public static async getByIdHandler(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const idFromRequest = Number(id);
    
    if (isNaN(idFromRequest)) {
      response.status(400).json({
        message: "error",
        error: "This id is not valid"
      }) 
      return;
    }

    const FindService = new FindPredictionUsecase(PredictionController.getRepository());

    const { predictionInfo } = await FindService.execute({ id: idFromRequest });

    response.status(200).json({
      message: "success",
      prediction: {
        authorId: predictionInfo.authorId,
        matchId: predictionInfo.matchId,
        scoreboard: {
          homeTeamScore: predictionInfo.scoreboard.homeTeamScore,
          awayTeamScore: predictionInfo.scoreboard.awayTeamScore
        },
        createdAt: predictionInfo.createdAt
      }
    })
  }

  public static async getAllHandler(request: Request, response: Response): Promise<void> {
    const listService = ListPredictionUsecase.create(PredictionController.getRepository());

    const predictionList = await listService.execute();

    response.status(200).json({
      message: "success",
      predictions: predictionList
    })
  }

  public static async deleteHandler(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const idFromRequest = Number(id);
    
    if (isNaN(idFromRequest)) {
      response.status(400).json({
        message: "error",
        error: "This id is not valid"
      }) 
      return;
    }

    const deleteService = new DeletePredictionUsecase(PredictionController.getRepository());

    await deleteService.execute({ id: idFromRequest });

    response.status(200).json({
      message: "success",
      deletedAt: new Date().toISOString
    })
  }
}