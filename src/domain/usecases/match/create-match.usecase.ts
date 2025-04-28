import { CreateMatchInputDto, CreateMatchOutputDto } from "../../../presentation/dtos/match/match.dto";
import { MatchGateway } from "../../../repositories/match/interface/match.gateway";
import { Match } from "../../entities/match";
import { Usecase } from "../../interfaces/usecase";

export class CreateMatchUsecase implements Usecase<CreateMatchInputDto, CreateMatchOutputDto> {
  public constructor(private readonly repository: MatchGateway){}

  async execute(input: CreateMatchInputDto): Promise<CreateMatchOutputDto> {
    const { homeTeam, awayTeam, homeTeamScore, awayTeamScore, matchDate, winner } = input;

    const match = Match.create(
      homeTeam, awayTeam, homeTeamScore, awayTeamScore,
      matchDate, winner
    )

    await this.repository.save(match);

    const output: CreateMatchOutputDto = {
      teams: {
        homeTeam,
        awayTeam
      },
      matchInfo: {
        date: matchDate,
        status: match.matchInfo.status
      }
    }

    return output;
  }
}