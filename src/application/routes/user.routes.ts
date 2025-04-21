import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('/users/:name', UserController.find);
router.post('/users', UserController.save);
router.delete('/users/:id', UserController.delete);

export default router;