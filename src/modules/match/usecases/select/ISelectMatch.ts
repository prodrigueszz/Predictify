import { SelectMatchDTO } from "../../dtos/SelectMatchDTO";
import { IMatchDTO } from "../../interfaces/IMatchDTO";
import { IMatchUseCase } from "../../interfaces/IMatchUseCase";

export interface ISelectMatch extends IMatchUseCase<SelectMatchDTO, IMatchDTO> {}