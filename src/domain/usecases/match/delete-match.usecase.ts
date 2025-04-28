import { DeleteMatchInputDto, DeleteMatchOutputDto } from "../../../presentation/dtos/match/match.dto";
import { MatchGateway } from "../../../repositories/match/interface/match.gateway";
import { Usecase } from "../../interfaces/usecase";

export class DeleteMatchUsecase implements Usecase<DeleteMatchInputDto, DeleteMatchOutputDto> {
  public constructor(private readonly repository: MatchGateway){}

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