import { FindMatchInputDto, FindMatchOutputDto } from "../../../presentation/dtos/match/match.dto";
import { MatchGateway } from "../../../repositories/match/interface/match.gateway";
import { Usecase } from "../../interfaces/usecase";

export class FindMatchUsecase implements Usecase<FindMatchInputDto, FindMatchOutputDto> {
  public constructor(private readonly repository: MatchGateway){}

  async execute(input: FindMatchInputDto): Promise<FindMatchOutputDto> {
    const { id } = input;

    const match = await this.repository.findById(id);
    if (match) {
      const { teams, score } = match;
      return {
        teams: {
          home: teams.homeTeam,
          away: teams.awayTeam
        }, 
        score: {
          homeScore: score.homeTeamScore,
          awayScore: score.awayTeamScore
        }
      }
    }
    
    
  }
}