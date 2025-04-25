import { Router } from 'express';
import { MatchController } from '../controllers/match.controller';

const MatchRouter = Router();

MatchRouter.post("/match", MatchController.postHandler);

export default MatchRouter;