import { PrismaClient } from "@prisma/client";
import { Match } from "../../domain/entities/match";
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
}