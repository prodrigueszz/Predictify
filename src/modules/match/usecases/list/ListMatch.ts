import { ListMatchDTO } from "../../dtos/ListMatchDTO";
import { IMatchRepository } from "../../interfaces/IMatchRepository";
import { IListMatch } from "./IListMatch";

export class ListMatch implements IListMatch<ListMatchDTO[]> {
  public constructor(private readonly matchRepository: IMatchRepository){}

  async execute(input?: number): Promise<ListMatchDTO[]> {
    const data = await this.matchRepository.list(input);
    const matchList = data.map(match => {
      const { id, teams, score, info } = match;
      return {
        id,
        home_team: teams.home,
        away_team: teams.away,
        home_goals: score.home_goals,
        away_goals: score.away_goals,
        winner: info.winner,
        status: info.status,
        date: info.date
      }
    })

    return matchList;
  }
}