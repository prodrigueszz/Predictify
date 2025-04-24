import { DefaultPredictionDto } from "../../application/dtos/prediction.dto";
import { Prediction } from "../../domain/entities/predictions";
import { PrismaClient } from "../../infra/generated/client";
import { PredictionGateway } from "./interface/prediction.gateway";

export class PrismaPredictionRepository implements PredictionGateway {
  private constructor(private readonly client: PrismaClient){}

  public static create(client: PrismaClient){
    return new PrismaPredictionRepository(client);
  }

  async save(prediction: Prediction): Promise<DefaultPredictionDto> {
    const { authorId, matchId, scoreboard, winner, status } = prediction;

    const newPrediction = await this.client.prediction.create({
      data: {
        authorId,
        matchId,
        homeTeamScore: scoreboard.homeTeamScore,
        awayTeamScore: scoreboard.awayTeamScore,
        winner,
        status
      }
    })
    console.log(newPrediction);

    const { id, createdAt } = newPrediction;
    const output: DefaultPredictionDto = {
      id, 
      createdAt
    }

    return output;
  }
}