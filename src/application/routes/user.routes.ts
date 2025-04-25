import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const UserRouter = Router();

UserRouter.get('/users/:id', UserController.getByIdHandler);
UserRouter.post('/users', UserController.postHandler);
UserRouter.delete('/users/:id', UserController.deleteHandler);

export default UserRouter;