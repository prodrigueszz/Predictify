import { prisma } from "../../../config/prisma.client";
import { UserRepository } from "../../infra/repository/UserRepository";
import { UpdateUser } from "./UpdateUser";

const makeUpdateUser = () => {
  const userRepository = new UserRepository(prisma);
  const updateUser = new UpdateUser(userRepository);
  return updateUser;
}

export default makeUpdateUser;