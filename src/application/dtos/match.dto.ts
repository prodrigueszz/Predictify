
export type CreateMatchInputDto = {
  homeTeam: string,
  awayTeam: string,
  homeTeamScore: number,
  awayTeamScore: number,
  matchDate: Date,
  winner: string
}

export type CreateMatchOutputDto = {
  teams: {
    homeTeam: string,
    awayTeam: string
  }
  matchInfo: {
    date: Date,
    status: boolean
  }
}