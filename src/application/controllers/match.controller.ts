import { Request, Response } from 'express';
import { prisma } from '../../infra/config/prisma.client';
import { PrismaMatchRepository } from '../../repositories/match/match.repository';
import { CreateMatchUsecase } from '../../usecases/match/create-match.usecase';

const MatchRepository = PrismaMatchRepository.create(prisma);
const CreateMatchService = CreateMatchUsecase.create(MatchRepository);

async function MatchPostHandler(request: Request, response: Response): Promise<void> {
  const { homeTeam, awayTeam, homeTeamScore, awayTeamScore, matchDate, winner } = request.body;

  const output = await CreateMatchService.execute({
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

export default MatchPostHandler;