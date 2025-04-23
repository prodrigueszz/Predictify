import { Predictions } from "../../../domain/entities/predictions";

export interface PrevisionGateway {
  save(prevision: Predictions): Promise<void>;
  // delete(id: string): Promise<void>;
  // findById(id: string): Promise<void>;
  // getAllByUser(createdBy: string): Promise<Prevision[]>; //TODO Mudar nome do parâmetro
  // update(props: PrevisionUpdateProps): Promise<void>; 
}