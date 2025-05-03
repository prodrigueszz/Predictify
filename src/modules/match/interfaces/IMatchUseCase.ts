export interface IMatchUseCase<input, output = void> {
  execute(input: input): Promise<output>
}