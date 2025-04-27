import { MatchGateway } from "../../../repositories/match/interface/match.gateway";
import { Match } from "../../entities/match";

export class ListMatchUsecase {
  private constructor(private readonly repository: MatchGateway){}
  
  public static create(repository: MatchGateway){
    return new ListMatchUsecase(repository);
  }

  async execute(): Promise<Match[]>{
    const matchList = await this.repository.getAll();

    return matchList;
  }
}