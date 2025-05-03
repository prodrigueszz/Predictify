export interface CreateMatchDTO {
  home_team: string,
  away_team: string,
  home_goals: number,
  away_goals: number,
  status: "upcoming",
  date: Date
}