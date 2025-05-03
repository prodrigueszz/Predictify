import { Request, Response } from "express";
import makeSelectMatch from "../../usecases/select/MakeSelectMatch";

const SelectController = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) res.status(400).json({
    error: "Missing required params"
  })

  const selectMatch = makeSelectMatch();

  const idAsNumber = Number(id);

  const match = await selectMatch.execute({ id: idAsNumber })

  res.status(200).json({
    message: "success",
    match: {
      match
    }
  })
}

export default SelectController;