export type CreateUserInputDto = {
  name: string,
  email: string,
  password: string
}

export type CreateUserOutputDto = {
  createdAt: Date
}

export type DeleteUserInputDto = {
  id: string
}

export type DeleteUserOutputDto = {
  deletedAt: Date
}