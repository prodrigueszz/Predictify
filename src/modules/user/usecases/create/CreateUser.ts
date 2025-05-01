import { User } from "../../domain/user";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { ICreateUser } from "./ICreateUser";

export class CreateUser implements ICreateUser {
  public constructor(private readonly userRepository: IUserRepository){}

  async execute(input: CreateUserDTO): Promise<void> {
    const { name, email, password } = input;

    const createdUser = new User(name, email, password);

    await this.userRepository.save(createdUser);
  }
}