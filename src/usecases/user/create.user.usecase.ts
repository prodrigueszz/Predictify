import { User } from "../../domain/entities/user";
import { UserGateway } from "../../repositories/user/interface/user.gateway";
import { Usecase } from "../usecase";

export type CreateUserDto = {
  name: string,
  email: string,
  password: string
}

export class CreateUserUsecase implements Usecase<CreateUserDto> {
  private constructor(private readonly repository: UserGateway){}

  public static create(repository: UserGateway){
    return new CreateUserUsecase(repository);
  }

  async execute(input: CreateUserDto): Promise<void> {
    const { name, email, password } = input;

    const aUser = User.create(name, email, password);

    await this.repository.save(aUser);
  }
}