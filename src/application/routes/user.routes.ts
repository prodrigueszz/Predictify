import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.post('/users', UserController.save);

export default router;