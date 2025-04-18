import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/interfaces/repositories/user.repository";

export class FakeRepository implements UserRepository {
  public usersList: User[] = [];

  public constructor(){}

  async save(user: User): Promise<void> {
    this.usersList.push(user);
  }

  async findByUsername(username: string): Promise<User> {
    const userIndex = this.usersList
    .map(user => {
      return user.username;
    })
    .findIndex(user => user === username);
    
    return this.usersList[userIndex];
  }

  update(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async list(): Promise<User[]> {
    return this.usersList;
  }

}