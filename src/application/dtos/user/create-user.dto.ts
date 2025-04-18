export type CreateUserInputDto = {
  username: string,
  email: string,
  password: string
}

export type CreateUserOutputDto = {
  id: string,
  username: string,
  email: string
}