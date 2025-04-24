import { PrismaClient } from "@prisma/client";
import { DefaultMatchDto } from "../../application/dtos/match.dto";
import { Match } from "../../domain/entities/match";
import { MatchGateway } from "./interface/match.gateway";

export class PrismaMatchRepository implements MatchGateway{
  private constructor(private readonly client: PrismaClient){}

  public static create(client: PrismaClient){
    return new PrismaMatchRepository(client);
  }

  async save(match: Match): Promise<DefaultMatchDto>{
    const { homeTeam, awayTeam, scoreboard, matchDate, winner, status } = match;
    const { home, away } = scoreboard;

    matchDate.toISOString;
    
    const { id, createdAt } = await this.client.match.create({
      data: {
        homeTeam,
        awayTeam,
        homeTeamScore: home, 
        awayTeamScore: away,
        matchDate,
        status,
        winner
      }
    })
    
    const output: DefaultMatchDto = {
      id, 
      createdAt
    }

    return output;
  }
}