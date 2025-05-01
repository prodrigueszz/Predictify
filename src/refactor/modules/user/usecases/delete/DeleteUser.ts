import { DeleteUserDTO } from "../../dtos/DeleteUserDTO";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IDeleteUserUsecase as IDeleteUserUseCase } from "./IDeleteUser";

export class DeleteUser implements IDeleteUserUseCase {
  public constructor(private readonly userRepository: IUserRepository){}

  async execute(input: DeleteUserDTO): Promise<void> {
      await this.userRepository.delete(input.id);
  }
}