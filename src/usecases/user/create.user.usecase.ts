import { UserRepository } from "../../repositories/user/user.repository.interface";
import { Usecase } from "../usecase";

export type CreateUserDto = {
  name: string,
  email: string,
  password: string
}

export class CreateUserUsecase implements Usecase<CreateUserDto> {
  private constructor(private readonly repository: UserRepository){}

  execute(): Promise<void> {

  }
}