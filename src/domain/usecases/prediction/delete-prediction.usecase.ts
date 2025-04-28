import { DeletePredictionInputDto, DeletePredictionOutputDto } from "../../../presentation/dtos/prediction/prediction.dto";
import { PredictionGateway } from "../../../repositories/predictions/interface/prediction.gateway";
import { Usecase } from "../../interfaces/usecase";

export class DeletePredictionUsecase implements Usecase<DeletePredictionInputDto, DeletePredictionOutputDto> {
  public constructor(private readonly repository: PredictionGateway){}

  async execute(input: DeletePredictionInputDto): Promise<DeletePredictionOutputDto> {
    const { id } = input;

    await this.repository.delete(id);

    const output: DeletePredictionOutputDto = {
      deletedAt: new Date()
    }

    return output;
  }
}