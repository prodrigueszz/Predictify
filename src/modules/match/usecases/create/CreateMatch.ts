import { Match } from "../../domain/match";
import { CreateMatchDTO } from "../../dtos/CreateMatchDTO";
import { IMatchRepository } from "../../interfaces/IMatchRepository";
import { ICreateMatch } from "./ICreateMatch";

export class CreateMatch implements ICreateMatch {
  public constructor(private readonly matchRepository: IMatchRepository){}

  async execute(input: CreateMatchDTO): Promise<void> {
    const newMatch = new Match({
      teams: {
        home: input.home_team,
        away: input.away_team
      },
      score: {
        home_goals: input.home_goals,
        away_goals: input.away_goals
      },
      matchInfo: {
        status: input.status,
        winner: "",
        date: input.date
      }
    })

    await this.matchRepository.save(newMatch);
  }
}