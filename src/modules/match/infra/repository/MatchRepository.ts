import { PrismaClient } from "../../../generated/client";
import { Match } from "../../domain/match";
import { IMatchRepository } from "../../interfaces/IMatchRepository";

export class MatchRepository implements IMatchRepository {
  constructor(private readonly client: PrismaClient){}

  async save(match: Match): Promise<void> {
    await this.client.match.create({
      data: {
        id: match.id,
        homeTeam: match.teams.home,
        awayTeam: match.teams.away,
        homeTeamScore: match.score.home_goals,
        awayTeamScore: match.score.away_goals,
        status: match.info.status,
        winner: match.info.winner,
        matchDate: match.info.date
      }
    })
  }
  async list(range?: number): Promise<Match[]> {
    const data = await this.client.match.findMany({
      take: range
    })

    const matchList = data.map(item => {
      const match = new Match({
        id: item.id,
        teams: {
          home: item.homeTeam,
          away: item.awayTeam
        },
        score: {
          home_goals: item.homeTeamScore,
          away_goals: item.awayTeamScore
        },
        matchInfo: {
          status: item.status,
          winner: item.winner,
          date: item.matchDate
        }
      })
      return match;
    })

    return matchList;
  }

  async selectById(id: number): Promise<Match | undefined> {
    const data = await this.client.match.findUnique({
      where: { id }
    })

    if (data) {
      const match = new Match({
        teams: {
          home: data.homeTeam,
          away: data.awayTeam 
        },
        score: {
          home_goals: data.homeTeamScore,
          away_goals: data.awayTeamScore
        },
        matchInfo: {
          status: data.status,
          winner: data.winner,
          date: data.matchDate 
        }
      })

      return match;
    }
  }
}