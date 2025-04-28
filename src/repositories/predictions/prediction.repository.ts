import { Prediction } from "../../domain/entities/predictions";
import { PrismaClient } from "../../infra/generated/client";
import { PredictionGateway } from "./interface/prediction.gateway";

export class PrismaPredictionRepository implements PredictionGateway {
  public constructor(private readonly client: PrismaClient){}

  async save(prediction: Prediction): Promise<void> {
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
  }

  async delete(id: number): Promise<void> {
    await this.client.prediction.delete({
      where: {
        id
      }
    })
  }

  async findbyId(id: number): Promise<Prediction> {
    const output = await this.client.prediction.findUnique({
      where: {
        id
      }
    })

    if (!output){
      throw new Error("Predictions does not exist");
    }
    const prediction = Prediction.create(
      output.authorId, output.matchId, output.homeTeamScore,
      output.awayTeamScore, output.winner, output.id, output.createdAt
    )

    return prediction;
  }

  async getAll(): Promise<Prediction[]> {
    const pred = await this.client.prediction.findMany();

    if (!pred) {
      throw new Error("No predictions");
    }

    const predictionList = pred.map( pred => {
      const prediction = Prediction.create(
        pred.authorId, pred.matchId, pred.homeTeamScore,
        pred.awayTeamScore, pred.winner, pred.id, pred.createdAt
      )
      return prediction;
    })

    return predictionList;
  }
}