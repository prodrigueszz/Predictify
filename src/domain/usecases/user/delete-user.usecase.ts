import { DeleteUserInputDto, DeleteUserOutputDto } from "../../../presentation/dtos/user/user.dto";
import { UserGateway } from "../../../repositories/user/interface/user.gateway";
import { Usecase } from "../interface/usecase";

export class DeleteUserUsecase  implements Usecase<DeleteUserInputDto, DeleteUserOutputDto> {
  private constructor(private readonly repository: UserGateway){}

  public static create(repository: UserGateway){
    return new DeleteUserUsecase(repository);
  }

  async execute(input: DeleteUserInputDto): Promise<DeleteUserOutputDto> {
    const { id } = input;

    await this.repository.delete(id);

    const output: DeleteUserOutputDto  = {
      deletedAt: new Date()
    }

    return output;
  }
} 