import { CreateUserInputDto, CreateUserOutputDto } from "../../../application/dtos/user/create-user.dto";
import { User } from "../../entities/user";
import { UserRepository } from "../../interfaces/repositories/user.repository";
import { UseCase } from "../../interfaces/usecase";

export class CreateUser implements UseCase<CreateUserInputDto, CreateUserOutputDto> {
  public constructor(private readonly userRepository: UserRepository){}

  async execute(input: CreateUserInputDto): Promise<CreateUserOutputDto> {
      const user = new User({
        id: crypto.randomUUID().toString(),
        username: input.username,
        email: input.email,
        password: input.password
      })

      await this.userRepository.save(user);

      const output = await this.OutputPresenter(user);

      return output;
  }

  async OutputPresenter(user: User){
    const output: CreateUserOutputDto = {
      id: user.id,
      username: user.username,
      email: user.email
    }

    return output;
  }
}