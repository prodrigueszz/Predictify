
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

export type DeleteMatchInputDto = {
  id: number
}

export type DeleteMatchOutputDto = {
  id: number,
  deletedAt: Date,
}

export type FindMatchInputDto = {
  id: number
}

export type FindMatchOutputDto = {
  teams: {
    home: string,
    away: string
  }
  score: {
    homeScore: number,
    awayScore: number
  }
} | undefined