export interface IListMatch <output> {
  execute(input: number): Promise<output>;
}