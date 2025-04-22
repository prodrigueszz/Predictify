import { Pool } from "pg";
import { Prevision } from "../../domain/entities/prevision";
import { PrevisionGateway } from "./interface/prevision.gateway";

export class PostgresPrevisionRepository implements PrevisionGateway {
  private constructor(private readonly pool: Pool){}

  public static create(pool: Pool){
    return new PostgresPrevisionRepository(pool);
  }

  private async queryExecutor(query: string, values: any[]){
    const client = await this.pool.connect();
    client.query(query, values);

    client.release();
  }

  async save(prevision: Prevision): Promise<void> {
    // const query = `INSERT INTO previsions(id, matchId, ) #TODO`
  }
}