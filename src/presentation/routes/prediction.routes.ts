import { Router } from 'express';
import { PredictionController } from '../controllers/prediction.controller';

const PredictionRouter = Router();

PredictionRouter.post("/predictions", PredictionController.createHandler);
PredictionRouter.get("/predictions/:id", PredictionController.getByIdHandler);
PredictionRouter.get("/predictions", PredictionController.getAllHandler);
PredictionRouter.delete("/predictions/:id", PredictionController.deleteHandler);

export default PredictionRouter;