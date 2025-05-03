import { Match } from "../domain/match";

export interface IMatchRepository {
  save(match: Match): Promise<void>;
  list(range?: number): Promise<Match[]>;
  selectById(id: number): Promise<Match | undefined>;
}