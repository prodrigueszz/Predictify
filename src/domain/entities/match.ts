export type MatchScoreboard = {
  home: number,
  away: number
}

export type MatchProps = {
  homeTeam: string,
  awayTeam: string,
  matchScore: MatchScoreboard,
  winner: string,
  status: boolean,
  matchDate: Date,
  id?: number
}

export class Match {
  private constructor(private props: MatchProps){}

  public static create(
    homeTeam: string, awayTeam: string,
    matchScore: MatchScoreboard, matchDate: Date,
    winner: string,
  ): Match {
    return new Match({
      homeTeam,
      awayTeam,
      matchScore,
      matchDate,
      winner,
      status: false
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

  get matchDate(){
    return this.props.matchDate;
  }

  public changeScoreboard(homeScore?: number, awayScore?: number): void {
    homeScore != null && (this.scoreboard.home = homeScore);
    awayScore != null && (this.scoreboard.away = awayScore);
  }

  public isOver(){
    return this.status;
  }

  public setWinner() {
    this.scoreboard.home > this.scoreboard.away && (this.props.winner = this.homeTeam);
    this.scoreboard.home < this.scoreboard.away && (this.props.winner = this.awayTeam);
    this.scoreboard.home == this.scoreboard.away && (this.props.winner = 'draw');
  }
}