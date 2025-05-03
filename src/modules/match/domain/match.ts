export interface MatchProperties {
  id?: number,
  teams: {
    home: string,
    away: string
  },
  score: {
    home_goals: number,
    away_goals: number
  },
  matchInfo: {
    status: string,
    winner: string,
    date: Date
  }
}

export class Match {
  private matchProperties: MatchProperties;

  public constructor(props: MatchProperties){
    this.matchProperties = props;
  }

  get id(){
    return this.matchProperties.id;
  }
  
  get score(){
    return this.matchProperties.score;
  }

  get teams(){
    return this.matchProperties.teams;
  }

  get info(){
    return this.matchProperties.matchInfo;
  }

  public defineWinner(){
    if (this.score.home_goals > this.score.away_goals){
      this.info.winner = this.teams.home;
    } else if (this.score.away_goals > this.score.home_goals){
      this.info.winner = this.teams.away;
    } else {
      this.info.winner = "Draw"
    }   
  }

  public isFinished(){
    const now = new Date();
    if (now > this.info.date) {
      this.info.status = "finished"
    }
  }
}