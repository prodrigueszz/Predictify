import { Request, Response } from 'express';
import { prisma } from '../../infra/config/prisma.client';
import { PrismaMatchRepository } from '../../repositories/match/match.repository';
import { CreateMatchUsecase } from '../../usecases/match/create-match.usecase';
import { DeleteMatchUsecase } from '../../usecases/match/delete-match.usecase';
import { FindMatchUsecase } from '../../usecases/match/find-match.usecase';
import { ListMatchUsecase } from '../../usecases/match/list-match.usecase';

export class MatchController {
  private static repository: PrismaMatchRepository;

  private static getRepository(): PrismaMatchRepository {
      if(!MatchController.repository){
        MatchController.repository = PrismaMatchRepository.create(prisma);
      }
  
      return MatchController.repository;
    }
  
  static async createMatchHandler(request: Request, response: Response): Promise<void> {
    const { homeTeam, awayTeam, homeTeamScore, awayTeamScore, matchDate, winner } = request.body;

    const createService = CreateMatchUsecase.create(MatchController.getRepository());
    
    const output = await createService.execute({
      homeTeam, 
      awayTeam, 
      homeTeamScore, 
      awayTeamScore, 
      matchDate,
      winner
    })
    
    response.status(201).json({
      message: "success",
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

  static async findHandler(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    
    const idFromRequest = Number(id);
    
    if (isNaN(idFromRequest)) {
      response.status(400).json({
        message: "error",
        error: "This id is not valid"
      }) 
      return;
    }
    
    const findService = FindMatchUsecase.create(MatchController.getRepository());
    
    await findService.execute({ id: idFromRequest });
    
    response.status(200).json({
        message: "success",
    })

  }

  static async deleteHandler(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    
    const idFromRequest = Number(id);
    
    if (isNaN(idFromRequest)) {
      response.status(400).json({
        message: "error",
        error: "This id is not valid",
      }) 
      return;
    }
    const deleteService = DeleteMatchUsecase.create(MatchController.getRepository());

    await deleteService.execute({ id: idFromRequest });

    response.status(204).json({
      message: "success",
      deletedAt: new Date()
    })
  }

  static async getAllHandler(request: Request, response: Response): Promise<void> {
    const listService = ListMatchUsecase.create(MatchController.getRepository());

    const matchList = await listService.execute(); 

    response.status(200).json({
      message: "success",
      matches: matchList
    })
  }
}
  