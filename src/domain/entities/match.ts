
export type MatchProps = {
  id?: number,
  teams: {
    homeTeam: string,
    awayTeam: string
  }
  score: {
    homeTeamScore: number,
    awayTeamScore: number,
  }
  matchInfo: {
    date: Date,
    status: "finished" | "upcoming",
    winner: string 
  }
}

export class Match {
  private constructor(private props: MatchProps){}

  public static create(
    homeTeam: string, awayTeam: string, homeTeamScore: number, awayTeamScore: number,
    date: Date, winner: string, id?: number
  ): Match {
    return new Match({
      id,
      teams: {
        homeTeam,
        awayTeam
      },
      score: {
        homeTeamScore,
        awayTeamScore
      },
      matchInfo: {
        date,
        status: "upcoming",
        winner
      }
    })
  }

  get id(): number{
    return this.id;
  }

  get teams(){
    return this.props.teams;
  }

  get score(){
    return this.props.score;
  }

  get matchInfo(){
    return this.props.matchInfo;
  }

  public isFinished(){
    const now = new Date();

    if (now >= this.matchInfo.date){
      return true
    }
    return false;
  }

  public refreshStatus() {
    if (this.isFinished()){
      this.matchInfo.status = 'finished';
    } 
  }
}