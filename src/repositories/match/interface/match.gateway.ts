import { DefaultMatchDto } from "../../../application/dtos/match.dto";
import { Match } from "../../../domain/entities/match";

export interface MatchGateway {
  save(match: Match): Promise<DefaultMatchDto>;
  // delete(id: number): Promise<DefaultMatchDto>;
  // findById(id: number): Promise<Match>;
  // getAll(): Promise<Match[]>;
}