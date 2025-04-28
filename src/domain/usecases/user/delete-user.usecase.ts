import { DeleteUserInputDto, DeleteUserOutputDto } from "../../../presentation/dtos/user/user.dto";
import { UserGateway } from "../../../repositories/user/interface/user.gateway";
import { Usecase } from "../../interfaces/usecase";

export class DeleteUserUsecase  implements Usecase<DeleteUserInputDto, DeleteUserOutputDto> {
  public constructor(private readonly repository: UserGateway){}

  async execute(input: DeleteUserInputDto): Promise<DeleteUserOutputDto> {
    const { id } = input;

    await this.repository.delete(id);

    const output: DeleteUserOutputDto  = {
      deletedAt: new Date()
    }

    return output;
  }
} 