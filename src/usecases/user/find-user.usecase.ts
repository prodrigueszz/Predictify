import { FindUserInputDto, FindUserOutputDto } from "../../application/dtos/user/user.dto";
import { UserGateway } from "../../repositories/user/interface/user.gateway";
import { Usecase } from "../interface/usecase";

export class FindUserUsecase implements Usecase<FindUserInputDto, FindUserOutputDto> {
  private constructor(private readonly repository: UserGateway){}

  public static create(repository: UserGateway){
    return new FindUserUsecase(repository);
  }

  async execute(input: FindUserInputDto): Promise<FindUserOutputDto> {
    const { name } = input;

    const output: FindUserOutputDto = {
      users: await this.repository.find(name),
    }
    
    return output;
  }
}