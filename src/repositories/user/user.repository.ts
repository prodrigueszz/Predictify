import { Pool } from "pg";
import { User } from "../../domain/entities/user";
import { UserGateway } from "./interface/user.gateway";

export class PostgresUserRepository implements UserGateway {
  private constructor(private readonly pool: Pool){}

  public static create(pool: Pool){
    return new PostgresUserRepository(pool);
  }

  async queryExecuter(query: string, values: string[]): Promise<void> {  
    const client = await this.pool.connect();
    client.query(query, values);
    client.release;
  }

  async save(user: User): Promise<void> {
    try {

      const query = `INSERT INTO users(id, name, email, password) VALUES ($1, $2, $3, $4)`;
      const values = [user.id, user.name, user.email, user.password];

      await this.queryExecuter(query, values);

    } catch(err){
      console.log(err);
    }
  }

  async delete(id: string): Promise<void | Error> {
    try {
      const query = `DELETE FROM users WHERE id = $1`;
      const values = [id];

      await this.queryExecuter(query, values);
    } catch (err) {
      console.log(err);
      return new Error("User does not exist"); 
    }
  }

  // async find(name?: string, email?: string, id?: string){
  //   }
}