export type PredictionProps = {
  id?: number,
  authorId: number,
  matchId: number,
  homeTeamScore: number,
  awayTeamScore: number,
  createdAt: Date,
  status: boolean
}

export class Prediction {
  private constructor(private props: PredictionProps){}

  public static create(authorId: number, matchId: number, 
    homeTeamScore: number, awayTeamScore: number,
    createdAt: Date, status: boolean, id?: number
  ) {
    return new Prediction({
      authorId, 
      matchId, 
      homeTeamScore,
      awayTeamScore,
      createdAt,
      status,
      id
    })
  }

  
}