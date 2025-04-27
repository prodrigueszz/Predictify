import { CreateUserInputDto, CreateUserOutputDto } from "../../../presentation/dtos/user/user.dto";
import { UserGateway } from "../../../repositories/user/interface/user.gateway";
import { User } from "../../entities/user";
import { Usecase } from "../interface/usecase";

export class CreateUserUsecase implements Usecase<CreateUserInputDto, CreateUserOutputDto> {
  private constructor(private readonly repository: UserGateway){}

  public static create(repository: UserGateway){
    return new CreateUserUsecase(repository);
  }

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