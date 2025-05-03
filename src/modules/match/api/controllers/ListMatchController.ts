import { Request, Response } from "express";
import { Match } from "../../domain/match";
import makeListMatch from "../../usecases/list/MakeListMatch";

const ListController = async (req: Request, res: Response) => {
  const { range } = req.params;

  const listMatch = makeListMatch();

  if (!range){
    const matchList = await listMatch.execute();
    const response = matchList.map(match => {
      return new Match({
        teams: {
          home: match.home_team,
          away: match.away_team
        },
        score: {
          home_goals: match.home_goals,
          away_goals: match.away_goals
        },
        matchInfo: {
          status: match.status,
          winner: match.winner,
          date: match.date
        }
      }) 
    });

    res.status(200).json({
      message: "success",
      matches: {
        response
      }
    })
  }

  const rangeAsNumber = Number(range);

  const matchList = await listMatch.execute(rangeAsNumber);
  const response = matchList.map(match => {
    return new Match({
      teams: {
        home: match.home_team,
        away: match.away_team
      },
      score: {
        home_goals: match.home_goals,
        away_goals: match.away_goals
      },
      matchInfo: {
        status: match.status,
        winner: match.winner,
        date: match.date
      }
    }) 
  });

  res.status(200).json({
    message: "sucess",
    matches: response
  })
}

export default ListController;