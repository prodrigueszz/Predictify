import { Pool } from "pg";
import { User } from "../../domain/entities/user";
import { UserGateway } from "./interface/user.gateway";

export class PostgresUserRepository implements UserGateway {
  private constructor(private readonly pool: Pool){}

  public static create(pool: Pool){
    return new PostgresUserRepository(pool);
  }

  async save(user: User): Promise<void> {
    try {
      const client = await this.pool.connect();
      const query = `INSERT INTO users(id, name, email, password) VALUES ($1, $2, $3, $4)`;
      const values = [user.id, user.name, user.email, user.password];

      client.query(query, values);
      client.release();
    } catch(err){
      console.log(err);
    }
  }
}