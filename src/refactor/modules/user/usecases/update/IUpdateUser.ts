import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";
import { IUserUseCase } from "../../interfaces/IUserUseCase";

export interface IUpdateUser extends IUserUseCase<UpdateUserDTO> {}