export interface ListMatchDTO {
  id?: number
  home_team: string,
  away_team: string,
  home_goals: number,
  away_goals: number,
  winner: string,
  status: string,
  date: Date
}