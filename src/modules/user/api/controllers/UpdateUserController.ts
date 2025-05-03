import { Request, Response } from "express";
import makeUpdateUser from "../../usecases/update/makeUpdateUser";

export const UpdateController = (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  if (!id || !data){
    res.status(400).json({
      error: "Something went wrong"
    })
  }


  const updateUser = makeUpdateUser();
  
  updateUser.execute({
    id: id as unknown as number,
    name: data.name,
    email: data.email,
    password: data.password
  });

  res.status(200).json({
    message: `the user ${data.name} has been updated`
  })
}