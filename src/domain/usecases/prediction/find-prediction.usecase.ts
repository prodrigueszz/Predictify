import { FindPredictionInputDto, FindPredictionOutputDto } from "../../../presentation/dtos/prediction/prediction.dto";
import { PredictionGateway } from "../../../repositories/predictions/interface/prediction.gateway";
import { Usecase } from "../interface/usecase";

export default class FindPredictionUsecase implements Usecase<FindPredictionInputDto, FindPredictionOutputDto> {
  private constructor(private readonly repository: PredictionGateway){}

  public static create(repository: PredictionGateway){
    return new FindPredictionUsecase(repository);
  }

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
