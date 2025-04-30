import { FindUserDTO } from "../../dtos/FindUserDTO";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { IFindUser } from "./IFindUser";

export class Finduser implements IFindUser {
  private strategies: Map<string, (input: FindUserDTO) => Promise<FindUserDTO>>;
  private userRepository: IUserRepository;

  public constructor(userRepository: IUserRepository){
    this.userRepository = userRepository;
    this.strategies = new Map<string, (input: FindUserDTO) => Promise<FindUserDTO>>([
      ['email', this.handleByEmail],
      ['id', this.handleById]
    ])
  }

  private resolverStrategy(input: FindUserDTO){
    const { email, id } = input;

    if (email){
      return this.strategies.get("email")!;
    }

    if (id){
      return this.strategies.get("id")!;
    }

    throw new Error("No valid parameter for search has been given");
  } 

  private async handleByEmail(input: FindUserDTO) {
    const { email } = input;
    const user = email && await this.userRepository.findByEmail(email);
    if (user) {
      const { id, name, email } = user;
      return { id, name, email };
    }
    return { email };
  }
  
  private async handleById(input: FindUserDTO) {
    const { id } = input;
    const user = id && await this.userRepository.findById(id);
    if (user) {
      const { id, name, email } = user;
      return { id, name, email };
    }
    return { id };
  }
  

  async execute(input: FindUserDTO): Promise<FindUserDTO> {
    const strategy = this.resolverStrategy(input);
    return strategy(input); 
  }
}