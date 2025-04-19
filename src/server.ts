import express from 'express';
import '../src/infrastructure/config/dotenv';
import pgPool from './infrastructure/config/database';
import { PostgresUserRepository } from './repositories/user/user.repository';
import { CreateUserUsecase } from './usecases/user/create.user.usecase';

const app = express();
const port = 3000;

const repository = PostgresUserRepository.create(pgPool);
const createUser = CreateUserUsecase.create(repository);

app.use(express.json());

app.post("/users", async (req, res) => {
  const userDto = {
    name: JSON.stringify(req.body['name']),
    email: JSON.stringify(req.body['email']),
    password: JSON.stringify(req.body['password']),
  }

  res.status(200).send();
  console.log(userDto);

  await createUser.execute(userDto);

})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
