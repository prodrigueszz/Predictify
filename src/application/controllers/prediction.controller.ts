import { Request, Response } from "express";
import { prisma } from "../../infra/config/prisma.client";
import { PrismaPredictionRepository } from "../../repositories/predictions/prediction.repository";
import { CreatePredictionUsercase } from "../../usecases/prediction/create-prediction.usecase";

export class PredictionController {
  private static repository: PrismaPredictionRepository;

  private static createRepository(): PrismaPredictionRepository {
    if(!PredictionController.repository){
      PredictionController.repository = PrismaPredictionRepository.create(prisma);
    }

    return PredictionController.repository;
  }

  public static async postHandler(request: Request, response: Response): Promise<void> {
    const { authorId, matchId, homeTeamScore, awayTeamScore, winner, status } = request.body;

    const CreateService = CreatePredictionUsercase.create(PredictionController.createRepository());
    const output = await CreateService.execute({
      authorId,
      matchId,
      homeTeamScore,
      awayTeamScore,
      winner,
      status
    })

    const { id, createdAt } = output;

    response.status(201).json({
      message: "sucess",
      prediction_properties: {
        id,
        createdAt,
        status
      } 
    })
  }
}