import { prisma } from "../../../config/prisma.client";
import { UserRepository } from "../../infra/repository/UserRepository";
import { FindUser } from "./FindUser";

const makeFindUser = () => {
  const userRepository = new UserRepository(prisma);
  const findUser = new FindUser(userRepository);
  return findUser;
}

export default makeFindUser;