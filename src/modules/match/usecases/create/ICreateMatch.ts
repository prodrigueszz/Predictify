import { CreateMatchDTO } from "../../dtos/CreateMatchDTO";
import { IMatchUseCase } from "../../interfaces/IMatchUseCase";

export interface ICreateMatch extends IMatchUseCase<CreateMatchDTO>{}