import { User } from "../../entities/user";

export interface UserRepository{
  save(user: User): Promise<void>;
  findById(id: string): Promise<User | undefined>;
  update(user: User): Promise<void>;
  delete(user: User): Promise<void>;
  list(): Promise<User[]>;
}