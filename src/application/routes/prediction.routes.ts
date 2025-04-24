import { Router } from 'express';
import { PredictionController } from '../controllers/prediction.controller';

const PredictionRouter = Router();

PredictionRouter.post("/prediction", PredictionController.postHandler);

export default PredictionRouter;