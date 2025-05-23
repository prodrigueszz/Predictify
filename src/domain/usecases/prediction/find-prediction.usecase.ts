import { FindPredictionInputDto, FindPredictionOutputDto } from "../../../presentation/dtos/prediction/prediction.dto";
import { PredictionGateway } from "../../../repositories/predictions/interface/prediction.gateway";
import { Usecase } from "../../interfaces/usecase";

export default class FindPredictionUsecase implements Usecase<FindPredictionInputDto, FindPredictionOutputDto> {
  public constructor(private readonly repository: PredictionGateway){}

  async execute(input: FindPredictionInputDto): Promise<FindPredictionOutputDto> {
    const { id } = input;

    const prediction = await this.repository.findbyId(id);

    const output: FindPredictionOutputDto = {
      predictionInfo: {
        matchId: prediction.matchId,
        authorId: prediction.authorId,
        createdAt: prediction.date,
        scoreboard: {
          homeTeamScore: prediction.scoreboard.homeTeamScore,
          awayTeamScore: prediction.scoreboard.awayTeamScore
        }
      }
    }

    return output;
  }
};
