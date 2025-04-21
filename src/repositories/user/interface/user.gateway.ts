import { User } from "../../../domain/entities/user";

export interface UserGateway {
  save(user: User): Promise<void>;
  delete(id: string): Promise<void | Error>;
  find(name: string): Promise<User[]>; 
}