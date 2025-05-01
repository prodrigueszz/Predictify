import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IUpdateUser } from "./IUpdateUser";

export class UpdateUser implements IUpdateUser {
  public constructor(private readonly userRepository: IUserRepository){}

  async execute(input: UpdateUserDTO): Promise<void> {
    const { id, name, email, password } = input;

    await this.userRepository.update(id, { name, email, password });
  }
}