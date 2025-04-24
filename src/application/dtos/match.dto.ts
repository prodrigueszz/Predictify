export type DefaultMatchDto = {
  id: number,
  createdAt: Date
}

export type CreateMatchInputDto = {
  homeTeam: string,
  awayTeam: string,
  homeTeamScore: number,
  awayTeamScore: number,
  matchDate: Date,
  winner: string
}
