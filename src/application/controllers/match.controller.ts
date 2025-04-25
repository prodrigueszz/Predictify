import { Request, Response } from 'express';
import { prisma } from '../../infra/config/prisma.client';
import { PrismaMatchRepository } from '../../repositories/match/match.repository';
import { CreateMatchUsecase } from '../../usecases/match/create-match.usecase';

export class MatchController {
  private static repository: PrismaMatchRepository;

  private static createRepository(): PrismaMatchRepository {
      if(!MatchController.repository){
        MatchController.repository = PrismaMatchRepository.create(prisma);
      }
  
      return MatchController.repository;
    }
  
  static async postHandler(request: Request, response: Response): Promise<void> {
    const { homeTeam, awayTeam, homeTeamScore, awayTeamScore, matchDate, winner } = request.body;

    const createService = CreateMatchUsecase.create(MatchController.createRepository());
    
    const output = await createService.execute({
      homeTeam, 
      awayTeam, 
      homeTeamScore, 
      awayTeamScore, 
      matchDate,
      winner
    })
    
    response.status(201).json({
      message: "sucess",
      info: {
        teams: {
          homeTeam: output.teams.homeTeam,
          awayTeam: output.teams.awayTeam
        },
        matchInfo: {
          date: output.matchInfo.date,
          status: output.matchInfo.status
        }
      }
    })
  } 
}
  