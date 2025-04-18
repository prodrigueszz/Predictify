import { Match } from "../../entities/match";

export interface MatchRepository{
  save(prevision: Match): Promise<void>;
  delete(prevision: Match): Promise<void>;
  update(prevision: Match): Promise<void>;
  findById(id: string): Promise<Match>;
  findByResult(result: string): Promise<Match>;
}