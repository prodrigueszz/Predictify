import { CreateUserInputDto } from "./application/dtos/user/create-user.dto";
import { FakeRepository } from "./application/fakeRepository/fake-user.repository";
import { CreateUser } from "./domain/usecases/users/create-user.usecase";

const repository = new FakeRepository();

const createUser = new CreateUser(repository);

const userDto: CreateUserInputDto = {
  username: 'Tiago',
  email: 'tiago@gmail.com',
  password: 'tiago123'
}

createUser.execute(userDto)
.then((output => console.log(output)));

createUser.execute({
  username: 'Vinicius',
  email: 'tiago@gmail.com',
  password: 'vini123'
}).then(output => {
  console.log(output);
})

repository.findByUsername('Tiago').then((user) => {
  console.log("Achei esse mano aqui: " + JSON.stringify(user));
})

console.log(repository.usersList
  .map(user => {
    return JSON.stringify(user);
  })
);