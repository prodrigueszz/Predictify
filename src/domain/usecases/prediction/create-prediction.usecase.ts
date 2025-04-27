import { CreatePredictionInputDto, CreatePredictionOutputDto } from "../../../presentation/dtos/prediction/prediction.dto";
import { PredictionGateway } from "../../../repositories/predictions/interface/prediction.gateway";
import { Prediction } from "../../entities/predictions";
import { Usecase } from "../interface/usecase";

export class CreatePredictionUsercase implements Usecase<CreatePredictionInputDto, CreatePredictionOutputDto> {
  private constructor(private readonly repository: PredictionGateway){}

  public static create(repository: PredictionGateway){
    return new CreatePredictionUsercase(repository);
  }

  async execute(input: CreatePredictionInputDto): Promise<CreatePredictionOutputDto> {
    const { authorId, matchId, homeTeamScore, awayTeamScore, winner, status } = input;

    const prediction = Prediction.create(
      authorId,
      matchId,
      homeTeamScore,
      awayTeamScore,
      winner,
    )

    await this.repository.save(prediction);

    const output: CreatePredictionOutputDto = { 
      createdAt: new Date() 
    }

    return output;
  }
}