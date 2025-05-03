import { Router } from 'express';
import { CreateController } from '../controllers/CreateMatchController';
import ListController from '../controllers/ListMatchController';
import SelectController from '../controllers/SelectMatchController';

const router = Router();

router.get('/match/list/:range', ListController);
router.get('/match/list', ListController);
router.post('/match', CreateController);
router.get('/match/:id', SelectController);

export default router;