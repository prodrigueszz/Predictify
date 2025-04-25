import { Prediction } from "../../../domain/entities/predictions";
import { DefaultPredictionDto } from "../../../usecases/dtos/prediction/prediction.dto";

export interface PredictionGateway {
  save(prevision: Prediction): Promise<DefaultPredictionDto>; 
}