import { prisma } from "../../../config/prisma.client";
import { MatchRepository } from "../../infra/repository/MatchRepository";
import { SelectMatch } from "./SelectMatch";

const makeSelectMatch = () => {
  const matchRepository = new MatchRepository(prisma);
  const selectMatch = new SelectMatch(matchRepository);

  return selectMatch;
}

export default makeSelectMatch;