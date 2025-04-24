import { CreateMatchInputDto, DefaultMatchDto } from "../../application/dtos/match.dto";
import { Match } from "../../domain/entities/match";
import { MatchGateway } from "../../repositories/match/interface/match.gateway";
import { Usecase } from "../interface/usecase";

export class CreateMatchUsecase implements Usecase<CreateMatchInputDto, DefaultMatchDto> {
  private constructor(private readonly repository: MatchGateway){}

  public static create(repository: MatchGateway){
    return new CreateMatchUsecase(repository);
  }

  async execute(input: CreateMatchInputDto): Promise<DefaultMatchDto> {
    const { homeTeam, awayTeam, homeTeamScore, awayTeamScore, matchDate, winner } = input;

    const match = Match.create(
      homeTeam, awayTeam, 
      { home: homeTeamScore, away: awayTeamScore },
      matchDate, winner
    )

    const { id, createdAt } = await this.repository.save(match);

    const output: DefaultMatchDto = { id, createdAt }

    return output;
  }
}