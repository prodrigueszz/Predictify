export type PredictionProps = {
  id?: number,
  authorId: number,
  matchId: number,
  scoreboard: {
    homeTeamScore: number,
    awayTeamScore: number,
  }
  createdAt?: Date,
  winner: string,
  status: boolean
}

export class Prediction {
  private constructor(private props: PredictionProps){}

  public static create(authorId: number, matchId: number, 
    homeTeamScore: number, awayTeamScore: number,
    winner: string, id?: number, createdAt?: Date
  ) {
    return new Prediction({
      authorId, 
      matchId, 
      scoreboard: {
        homeTeamScore,
        awayTeamScore
      },
      winner,
      status: false,
      id,
      createdAt
    })
  }

  get authorId() {
    return this.props.authorId;
  }

  get matchId() {
    return this.props.matchId;
  }

  get scoreboard(){
    return this.props.scoreboard;
  }

  get status(){
    return this.props.status;
  }

  get winner(){
    return this.props.winner;
  }
}