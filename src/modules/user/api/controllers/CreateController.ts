import { Request, Response } from "express";
import makeCreateUser from "../../usecases/create/MakeCreateUser";

export const CreateController = async (req: Request, res: Response) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  if (!name || !email || !password ){
    res.status(400).json({
      error: "Missing required field"
    })
    return;
  }

  const createUser = makeCreateUser();
  await createUser.execute({ name, email, password });
  res.status(201).json({
    message: "User created!"
  })

}