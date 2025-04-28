import { CreateUserInputDto, CreateUserOutputDto } from "../../../presentation/dtos/user/user.dto";
import { UserGateway } from "../../../repositories/user/interface/user.gateway";
import { User } from "../../entities/user";
import { Usecase } from "../../interfaces/usecase";

export class CreateUserUsecase implements Usecase<CreateUserInputDto, CreateUserOutputDto> {
  public constructor(private readonly repository: UserGateway){}

  async execute(input: CreateUserInputDto): Promise<CreateUserOutputDto> {
    const { name, email, password } = input;

    const user = User.create(name, email, password);

    await this.repository.save(user);

    const output: CreateUserOutputDto = {
      createdAt: new Date()
    }

    return output;
  }
}