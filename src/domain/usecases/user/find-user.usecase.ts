import { FindUserInputDto, FindUserOutputDto } from "../../../presentation/dtos/user/user.dto";
import { UserGateway } from "../../../repositories/user/interface/user.gateway";
import { Usecase } from "../../interfaces/usecase";

export class FindUserUsecase implements Usecase<FindUserInputDto, FindUserOutputDto> {
  public constructor(private readonly repository: UserGateway){}

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