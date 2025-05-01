import { prisma } from "../../../config/prisma.client";
import { UserRepository } from "../../infra/repository/UserRepository";
import { DeleteUser } from "./DeleteUser";

const makeDeleteUser = () => {
  const userRepository = new UserRepository(prisma);
  const deleteUser = new DeleteUser(userRepository);
  return deleteUser;
}

export default makeDeleteUser;