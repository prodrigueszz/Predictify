import { UserGateway } from "../../repositories/user/interface/user.gateway";
import { FindUserInputDto, FindUserOutputDto } from "../dtos/user/user.dto";
import { Usecase } from "../interface/usecase";

export class FindUserUsecase implements Usecase<FindUserInputDto, FindUserOutputDto> {
  private constructor(private readonly repository: UserGateway){}

  public static create(repository: UserGateway){
    return new FindUserUsecase(repository);
  }

  async execute(input: FindUserInputDto): Promise<FindUserOutputDto> {
    const { id } = input;

    const { name, email } = await this.repository.findById(id);
    
    const output: FindUserOutputDto = {
      name,
      email
    }
    
    return output;
  }
}