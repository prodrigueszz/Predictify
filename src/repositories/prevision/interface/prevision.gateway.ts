import { Prevision } from "../../../domain/entities/prevision";

export interface PrevisionGateway {
  save(prevision: Prevision): Promise<void>;
  // delete(id: string): Promise<void>;
  // findById(id: string): Promise<void>;
  // getAllByUser(createdBy: string): Promise<Prevision[]>; //TODO Mudar nome do parâmetro
  // update(props: PrevisionUpdateProps): Promise<void>; 
}