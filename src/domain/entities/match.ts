export type Scoreboard = {
  score1: number,
  score2: number
}

export type PrevisionProps = {
  id: string,
  sport: string,
  team1: string,
  team2: string,
  scoreboard: Scoreboard,
  result: string
}

export class Match {
  private constructor(private props: PrevisionProps){}

  public static build(id: string, sport: string, scoreboard: Scoreboard, team1: string, team2: string, result: string){
    return new Match({
      id,
      sport,
      scoreboard,
      team1,
      team2,
      result
    })
  }

  get sport(){
    return this.props.sport;
  }

  get scoreboard(){
    return this.props.scoreboard;
  }

  get team1(){
    return this.props.team1;
  }

  get team2(){
    return this.props.team2;
  }
}