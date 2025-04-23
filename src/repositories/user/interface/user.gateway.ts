import { User } from "../../../domain/entities/user";

export interface UserGateway {
  save(user: User): Promise<void>;
  delete(id: number): Promise<void | Error>;
  findById(id: number): Promise<User>;
}