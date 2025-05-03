export interface IMatchDTO {
  id?: number,
  home_team: string,
  away_team: string,
  home_goals: number,
  away_goals: number,
  date: Date,
  status: "upcoming" | "finished",
  winner: string
}