import { Pool } from "pg";
import { Match } from "../../domain/entities/match";
import { MatchGateway } from "./interface/match.gateway";

export class PostgresMatchRepository implements MatchGateway {
  private constructor(private readonly pool: Pool){}

  public static create(pool: Pool): PostgresMatchRepository{
    return new PostgresMatchRepository(pool);
  }

  save(match: Match): Promise<void> {
    throw new Error("Tem que implementar ae bixo");
  }
}