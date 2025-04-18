import { User } from "../../entities/user";

export interface UserRepository{
  save(user: User): Promise<void>;
  findByUsername(username: string): Promise<User>;
  update(user: User): Promise<void>;
  delete(user: User): Promise<void>;
  list(): Promise<User[]>;
}