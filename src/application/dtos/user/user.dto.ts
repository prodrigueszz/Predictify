import { User } from "../../../domain/entities/user"

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

export type FindUserInputDto = {
  name: string
}

export type FindUserOutputDto = {
  users: User[];
}