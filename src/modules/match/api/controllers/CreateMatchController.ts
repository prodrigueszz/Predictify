import { Request, Response } from "express";
import makeCreateMatch from "../../usecases/create/MakeCreateMatch";

export const CreateController = async (req: Request, res: Response) => {
  const data = req.body;

  if(data){
    const { teams, score, info } = data;
    
    const createMatch = makeCreateMatch();

    const date: Date = info.date;

    date.toISOString;

    await createMatch.execute({
      home_team: teams.home_team,
      away_team: teams.away_team,
      home_goals: score.home_goals,
      away_goals: score.away_goals,
      status: info.status,
      date: date
    });

    res.status(201).json({
      message: "Match created"
    })
    
    return;
  }

  res.status(400).json({
    error: "Cannot create match: Missing required fields"
  })
}