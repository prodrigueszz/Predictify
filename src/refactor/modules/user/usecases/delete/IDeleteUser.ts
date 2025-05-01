import { DeleteUserDTO } from "../../dtos/DeleteUserDTO";
import { IUserUseCase } from "../../interfaces/IUserUseCase";

export interface IDeleteUserUsecase extends IUserUseCase<DeleteUserDTO>{}