import { Request, Response } from "express";
import makeDeleteUser from "../../usecases/delete/MakeDeleteUser";

export const DeleteController = async (req: Request, res: Response) => {
  const requestData = req.params;
  if (!requestData.id){
    res.status(400).json({
      error: "Something went wrong"
    })
  }
  const requestId = requestData.id;
  const requestIdAsNum = Number(requestId);

  const deleteUser = makeDeleteUser();
  await deleteUser.execute({ id: requestIdAsNum });

  res.status(204).json({
    message: "The user has been deleted"
  })
}