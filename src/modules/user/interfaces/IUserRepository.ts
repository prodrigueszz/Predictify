import { User } from "../domain/user";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: number, data: Partial<User>): Promise<void>
  delete(id: number): Promise<void>
}