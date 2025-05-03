import { SelectMatchDTO } from "../../dtos/SelectMatchDTO";
import { IMatchDTO } from "../../interfaces/IMatchDTO";
import { IMatchRepository } from "../../interfaces/IMatchRepository";
import { ISelectMatch } from "./ISelectMatch";

export class SelectMatch implements ISelectMatch {
  constructor(private readonly matchRepository: IMatchRepository){}

  async execute(input: SelectMatchDTO): Promise<IMatchDTO> {
    const { id } = input;
    const output = await this.matchRepository.selectById(id);

    const match = {
      id: output.id,
      home_team: output.teams.home,
      away_team: output.teams.away,
      home_goals: output.score.home_goals,
      away_goals: output.score.away_goals,
      date: output.info.date,
      status: output.info.status,
      winner: output.info.winner
    }
    
    return match
  }
}