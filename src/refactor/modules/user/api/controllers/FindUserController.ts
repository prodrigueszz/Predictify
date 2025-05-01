import { Request, Response } from "express";
import makeFindUser from "../../usecases/find/makeFindUser";

const FindController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const findUser = makeFindUser();
  try {
    const user = await findUser.execute({ id: (id as unknown as number) });
    res.status(200).json({
      message: "sucess",
      userData: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })
  } catch(err){
    res.status(400).json({
      error: err
    })
  }
}