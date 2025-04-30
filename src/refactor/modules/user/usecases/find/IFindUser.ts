import { FindUserDTO } from "../../dtos/FindUserDTO";
import { IUserUseCase } from "../../interfaces/IUserUseCase";

export interface IFindUser extends IUserUseCase<FindUserDTO, FindUserDTO>{
  execute(input: FindUserDTO): Promise<FindUserDTO>
}