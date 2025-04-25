import { Match } from "../../domain/entities/match";
import { MatchGateway } from "../../repositories/match/interface/match.gateway";

export class ListMatchUsecase {
  private constructor(private readonly repository: MatchGateway){}
  
  public static create(repository: MatchGateway){
    return new ListMatchUsecase(repository);
  }

  async execute(): Promise<Match[]>{
    const matchList: Match[] = await this.repository.getAll();

    return matchList;
  }
}