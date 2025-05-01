import { prisma } from "../../../config/prisma.client";
import { UserRepository } from "../../infra/repository/UserRepository";
import { CreateUser } from "./CreateUser";

const makeCreateUser = () => {
  const userRepository = new UserRepository(prisma);
  const createUser = new CreateUser(userRepository);
  return createUser;
}

export default makeCreateUser;