import { User } from "../../../domain/entities/user";

export interface UserGateway {
  save(user: User): Promise<void>;
}