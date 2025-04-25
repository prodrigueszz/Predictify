import { Match } from "../../../domain/entities/match";

export interface MatchGateway {
  save(match: Match): Promise<void>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Match | undefined>;
  getAll(): Promise<Match[]>;
}