import { MatchGateway } from "../../repositories/match/interface/match.gateway";
import { DeleteMatchInputDto, DeleteMatchOutputDto } from "../dtos/match/match.dto";
import { Usecase } from "../interface/usecase";

export class DeleteMatchUsecase implements Usecase<DeleteMatchInputDto, DeleteMatchOutputDto> {
  private constructor(private readonly repository: MatchGateway){}
  
  public static create(repository: MatchGateway){
    return new DeleteMatchUsecase(repository);
  }

  async execute(input: DeleteMatchInputDto): Promise<DeleteMatchOutputDto> {
    const { id } = input;

    await this.repository.delete(id);

    const output: DeleteMatchOutputDto = {
      id,
      deletedAt: new Date()
    }

    return output;
  }
}