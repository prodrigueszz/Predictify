import { prisma } from "../../../config/prisma.client";
import { MatchRepository } from "../../infra/repository/MatchRepository";
import { ListMatch } from "./ListMatch";

const makeListMatch = () => {
  const matchRepository = new MatchRepository(prisma);
  const listMatch = new ListMatch(matchRepository);

  return listMatch;
}

export default makeListMatch;