import { PredictionGateway } from "../../../repositories/predictions/interface/prediction.gateway";
import { Prediction } from "../../entities/predictions";

export default class ListPredictionUsecase {
  private constructor(private readonly repository: PredictionGateway){}

  public static create(repository: PredictionGateway){
    return new ListPredictionUsecase(repository);
  }

  async execute(): Promise<Prediction[]> {
    const predictionList = await this.repository.getAll();

    return predictionList;
  }
};
