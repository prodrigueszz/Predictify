export type CreatePredictionInputDto = {
  id?: number,
  authorId: number,
  matchId: number,
  homeTeamScore: number,
  awayTeamScore: number,
  createdAt?: Date,
  winner: string,
  status: boolean
}

export type CreatePredictionOutputDto = {
  createdAt: Date
}

export type FindPredictionInputDto = {
  id: number
}

export type FindPredictionOutputDto = {
  predictionInfo: {
    matchId: number,
    authorId: number,
    createdAt?: Date,
    scoreboard: {
      homeTeamScore: number,
      awayTeamScore: number
    }
  }
}

export type DeletePredictionInputDto = {
  id: number
}

export type DeletePredictionOutputDto = {
  deletedAt: Date
}