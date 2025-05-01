import { PrismaClient } from "../../../generated/client";
import { User } from "../../domain/user";
import { IUserRepository } from "../../interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  public constructor(private readonly client: PrismaClient){}

  async save(user: User): Promise<void> {
    await this.client.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    })
  }

  async findById(id: number): Promise<User | null> {
    const data = await this.client.user.findUnique({
      where: { id }
    })
    const user = data && new User(data.name, data.email, data.password);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const data = await this.client.user.findUnique({
      where: { email }
    })
    const user = data && new User(data.name, data.email, data.password);
    return user;
  }

  async update(id: number, data: Partial<User>): Promise<void> {
    const { name, email, password } = data;

    await this.client.user.update({
      where: { id },
      data: { name, email, password }
    })
  }

  async delete(id: number): Promise<void> {
    await this.client.user.delete({
      where: { id }
    })
  }
}