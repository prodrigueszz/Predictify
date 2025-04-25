import { Prediction } from "../../../domain/entities/predictions";

export interface PredictionGateway {
  save(prevision: Prediction): Promise<void>; 
  delete(id: number): Promise<void>;
  findbyId(id: number): Promise<Prediction>;
  getAll(): Promise<Prediction[]>;
}