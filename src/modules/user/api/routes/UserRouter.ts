import { Router } from 'express';
import { CreateController } from '../controllers/CreateController';
import { DeleteController } from '../controllers/DeleteController';
import { FindController } from '../controllers/FindUserController';
import { UpdateController } from '../controllers/UpdateController';


const router = Router();

router.get('/users', FindController);
router.post('/users', CreateController);
router.patch('/users/:id', UpdateController);
router.delete('/users/:id', DeleteController);

export default router;