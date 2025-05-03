import { Router } from 'express';
import { CreateController } from '../controllers/CreateMatchController';
import ListController from '../controllers/ListMatchController';
import SelectController from '../controllers/SelectMatchController';

const router = Router();

router.get('/match/:range', ListController);
router.get('/match', ListController);
router.post('/match', CreateController);
router.get('/match/:id', SelectController);

export default router;