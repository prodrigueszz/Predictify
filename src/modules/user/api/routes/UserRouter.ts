import { Router } from 'express';
import { CreateController } from '../controllers/CreateUserController';
import { DeleteController } from '../controllers/DeleteUserController';
import { FindController } from '../controllers/FindUserController';
import { UpdateController } from '../controllers/UpdateUserController';


const router = Router();

router.get('/users', FindController);
router.post('/users', CreateController);
router.patch('/users/:id', UpdateController);
router.delete('/users/:id', DeleteController);

export default router;