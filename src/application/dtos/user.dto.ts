
export type CreateUserInputDto = {
  name: string,
  email: string,
  password: string
}

export type CreateUserOutputDto = {
  createdAt: Date
}

export type DeleteUserInputDto = {
  id: number
}

export type DeleteUserOutputDto = {
  deletedAt: Date
}

export type FindUserInputDto = {
  id: number
}

export type FindUserOutputDto = {
  name: string,
  email: string
}