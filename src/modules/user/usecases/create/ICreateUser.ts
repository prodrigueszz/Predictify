import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUserUseCase } from "../../interfaces/IUserUseCase";

export interface ICreateUser extends IUserUseCase<CreateUserDTO> {}