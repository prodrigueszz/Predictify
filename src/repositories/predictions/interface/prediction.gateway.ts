import { DefaultPredictionDto } from "../../../application/dtos/prediction.dto";
import { Prediction } from "../../../domain/entities/predictions";

export interface PredictionGateway {
  save(prevision: Prediction): Promise<DefaultPredictionDto>; 
}