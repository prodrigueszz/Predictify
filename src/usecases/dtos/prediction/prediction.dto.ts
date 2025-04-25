export type DefaultPredictionDto = {
  id: number,
  createdAt: Date
}

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
  status: boolean,
  createdAt: Date,
  id: number
}