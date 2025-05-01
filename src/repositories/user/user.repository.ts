import { User } from "../../domain/entities/user";
import { PrismaClient } from "../../refactor/modules/generated/client";
import { UserGateway } from "./interface/user.gateway";

export class PrismaUserRepository implements UserGateway {
  public constructor(private readonly client: PrismaClient){}
  async save(user: User){
    await this.client.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password
      }
    })
  }

  async delete(id: number): Promise<void> {
    await this.client.user.delete({
      where: {
        id: id
      }
    })
  }

  async findById(id: number): Promise<User> {
    const output = await this.client.user.findUnique({
      where: {
        id: id
      }
    })
    
    if(!output) {
      throw new Error("User not found");
    }

    const { name, email, password } = output;

    const user = User.create(name, email, password, output.id);

    return user;
  }
}