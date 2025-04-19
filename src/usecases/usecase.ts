export interface Usecase<InputDto>{
  execute(input: InputDto): Promise<void>; 
}