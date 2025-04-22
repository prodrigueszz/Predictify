import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('/users/:name', UserController.getHandler);
router.post('/users', UserController.postHandler);
router.delete('/users/:id', UserController.deleteHandler);

export default router;