import { Match } from "../../../domain/entities/match";

export interface MatchGateway {
  save(match: Match): Promise<void>;
  // delete(id: number): Promise<void>;
  // findById(id: number): Promise<Match>;
  // getAll(): Promise<Match[]>;
}