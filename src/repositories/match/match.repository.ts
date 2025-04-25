import { Match } from "../../domain/entities/match";
import { PrismaClient } from "../../infra/generated/client";
import { MatchGateway } from "./interface/match.gateway";

export class PrismaMatchRepository implements MatchGateway{
  private constructor(private readonly client: PrismaClient){}

  public static create(client: PrismaClient){
    return new PrismaMatchRepository(client);
  }

  async save(match: Match): Promise<void>{
    const { teams, score, matchInfo } = match;

    const matchDate = matchInfo.date;
    matchDate.toISOString;

    await this.client.match.create({
      data: {
        homeTeam: teams.homeTeam,
        awayTeam: teams.awayTeam,
        homeTeamScore: score.homeTeamScore, 
        awayTeamScore: score.awayTeamScore,
        matchDate,
        status: matchInfo.status,
        winner: matchInfo.winner
      }
    })
  }

  async delete(id: number) {
    await this.client.match.delete({
      where: {
        id
      }
    })
  }

  async getAll(): Promise<Match[]> {
    const matchList = await this.client.match.findMany();

    const output = matchList.map( match => {
      return Match.create(
        match.homeTeam, match.awayTeam, match.homeTeamScore,
        match.awayTeamScore, match.matchDate, match.winner, match.id
      )
    })

    return output;
  }

  async findById(id: number): Promise<Match | undefined> {
    const match = await this.client.match.findUnique({
      where: {
        id
      }
    })

    if (match){
      const output = Match.create(
        match.homeTeam, match.awayTeam, match.homeTeamScore,
        match.awayTeamScore, match.matchDate, match.winner, match.id 
      )
      return output;
    }
  }
}