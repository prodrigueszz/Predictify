export interface IUserUseCase<input, output = void> {
  execute(input: input): Promise<output>
}