import { Prediction } from "../../domain/entities/predictions";
import { PrismaClient } from "../../infra/generated/client";
import { DefaultPredictionDto } from "../../usecases/dtos/prediction/prediction.dto";
import { PredictionGateway } from "./interface/prediction.gateway";

export class PrismaPredictionRepository implements PredictionGateway {
  private constructor(private readonly client: PrismaClient){}

  public static create(client: PrismaClient){
    return new PrismaPredictionRepository(client);
  }

  async save(prediction: Prediction): Promise<DefaultPredictionDto> {
    const { authorId, matchId, scoreboard, winner, status } = prediction;

    const { id, createdAt } = await this.client.prediction.create({
      data: {
        authorId,
        matchId,
        homeTeamScore: scoreboard.homeTeamScore,
        awayTeamScore: scoreboard.awayTeamScore,
        winner,
        status
      }
    })

    const output: DefaultPredictionDto = {
      id, 
      createdAt
    }

    return output;
  }
}