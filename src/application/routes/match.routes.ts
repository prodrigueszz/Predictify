import { Router } from 'express';
import MatchPostHandler from '../controllers/match.controller';

const MatchRouter = Router();

MatchRouter.post("/match", MatchPostHandler);

export default MatchRouter;