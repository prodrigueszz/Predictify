import { FindUserInputDto, FindUserOutputDto } from "../../../application/dtos/user/find-user.dto";
import { UserRepository } from "../../interfaces/repositories/user.repository";
import { UseCase } from "../../interfaces/usecase";

export class FindUser implements UseCase<FindUserInputDto, FindUserOutputDto> {
  public constructor(private readonly userRepository: UserRepository){}

  async execute(input: FindUserInputDto): Promise<FindUserOutputDto> {
    const { id } = input;

    const user = await this.userRepository.findById(id);

    return {
      username: user.username,
      email: user.email
    }
  }
}