import { Match, MatchScoreboard } from "../../../domain/entities/match"

export type PrevisionUpdateProps = {
  id?: string,
  match?: Match,
  betValue?: number,
  createdBy?: string,
  createdAt?: Date,
  scorePrevision?: MatchScoreboard,
  status?: boolean
}