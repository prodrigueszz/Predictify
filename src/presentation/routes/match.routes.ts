import { Router } from 'express';
import { MatchController } from '../controllers/match.controller';

const MatchRouter = Router();

MatchRouter.post("/match", MatchController.createMatchHandler);
MatchRouter.get("/match/:id", MatchController.findHandler);
MatchRouter.get("/match", MatchController.getAllHandler);
MatchRouter.delete("/match/:id", MatchController.deleteHandler);

export default MatchRouter;