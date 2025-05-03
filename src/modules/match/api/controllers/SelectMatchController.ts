import { Request, Response } from "express";
import makeSelectMatch from "../../usecases/select/MakeSelectMatch";

const SelectController = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) res.status(400).json({
    error: "Missing required params"
  })

  const selectMatch = makeSelectMatch();

  const match = await selectMatch.execute({ id: id as unknown as number })

  res.status(200).json({
    message: "success",
    match: {
      match
    }
  })
}