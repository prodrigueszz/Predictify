export type MatchScoreboard = {
  home: number,
  away: number
}

export type MatchProps = {
  id: number,
  homeTeam: string,
  awayTeam: string,
  matchScore: MatchScoreboard,
  winner: string,
  matchDate: Date,
  status: boolean
}

export class Match {
  private constructor(private props: MatchProps){}

  public static create(
    id: number,
    homeTeam: string, awayTeam: string,
    scoreMatch: MatchScoreboard,
    winner: string,
    matchDate: Date,
    status: false,
  ): Match {
    return new Match({
      id,
      homeTeam,
      awayTeam,
      matchScore: scoreMatch,
      winner,
      matchDate,
      status
    })
  }

  get scoreboard(){
    return this.props.matchScore;
  }

  get winner() {
    return this.props.winner;
  }

  get status() {
    return this.props.status;
  }

  get homeTeam(){
    return this.props.homeTeam;
  }

  get awayTeam(){
    return this.props.awayTeam;
  }

  public changeScoreboard(homeScore?: number, awayScore?: number): void {
    homeScore != null && (this.scoreboard.home = homeScore);
    awayScore != null && (this.scoreboard.away = awayScore);
  }

  public isOver(){
    return this.status;
  }

  public setStatus(){
    this.props.matchDate > new Date() && (this.props.status = true); 
  }

  public setWinner() {
    this.scoreboard.home > this.scoreboard.away && (this.props.winner = this.homeTeam);
    this.scoreboard.home < this.scoreboard.away && (this.props.winner = this.awayTeam);
    this.scoreboard.home == this.scoreboard.away && (this.props.winner = 'draw');
  }
}