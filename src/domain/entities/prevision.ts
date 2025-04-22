import { randomUUID } from "crypto";
import { MatchScoreboard } from "./match";

export type PrevisionProps = {
  id: string,
  matchId: number, //ForeingKey
  betValue: number, //TODO Mudar nome e tipo (Criar sistema de pontuação)
  createdBy: string,
  createdAt: Date,
  scorePrevision: MatchScoreboard,
  status: boolean
}

export class Prevision {
  private constructor(private props: PrevisionProps){}

  public create(
    match: number, betValue: number, 
    createdBy: string, createdAt: Date, 
    scorePrevision: MatchScoreboard,
  ): Prevision {
    return new Prevision({
      id: randomUUID(),
      matchId: match,
      betValue,
      createdBy, 
      createdAt,
      scorePrevision,
      status: false
    })
  }

  public changePrevision(newScorePrevision: MatchScoreboard ): void{
    if(new Date() > this.props.createdAt){
      throw new Error("This prevision cannot be changed");
    }
    this.props.scorePrevision = newScorePrevision;
  }

  public setBetValue(newBetValue: number): void {
    if(new Date() > this.props.createdAt){
      throw new Error("This bet value cannot be changed anymore");
    }
    this.props.betValue = newBetValue;
  }
}