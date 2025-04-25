import { MatchGateway } from "../../repositories/match/interface/match.gateway";
import { FindMatchInputDto, FindMatchOutputDto } from "../dtos/match/match.dto";
import { Usecase } from "../interface/usecase";

export class FindMatchUsecase implements Usecase<FindMatchInputDto, FindMatchOutputDto> {
  private constructor(private readonly repository: MatchGateway){}
  
  public static create(repository: MatchGateway){
    return new FindMatchUsecase(repository);
  }

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