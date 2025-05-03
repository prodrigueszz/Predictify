import { prisma } from "../../../config/prisma.client";
import { MatchRepository } from "../../infra/repository/MatchRepository";
import { CreateMatch } from "./CreateMatch";

const makeCreateMatch = () => {
  const matchRepository = new MatchRepository(prisma);
  const createMatch = new CreateMatch(matchRepository);

  return createMatch;
}

export default makeCreateMatch;