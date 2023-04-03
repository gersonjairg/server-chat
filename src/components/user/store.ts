import { Types } from "mongoose"
import { NewUserEntry, UserType } from "types/user"
import UserModel from "./model"

export const list = async (): Promise<UserType[]> => {
  return UserModel.find()
}

export const add = async (user: UserType): Promise<UserType> => {
  const newUser = new UserModel(user)
  return newUser.save()
}

export const update = async (
  id: string,
  user: NewUserEntry
): Promise<UserType> => {
  const searchId = new Types.ObjectId(id)
  const { name } = user

  const userFound = await UserModel.findById(searchId)
  if (!userFound) {
    throw new Error("No user found related to the provided id")
  }

  userFound.name = name !== undefined ? name : userFound.name

  return userFound.save()
}

export const remove = async (id: string): Promise<UserType> => {
  const searchId = new Types.ObjectId(id)

  const userFound = await UserModel.findById(searchId)
  if (!userFound) {
    throw new Error("No user found related to the provided id")
  }

  return userFound.deleteOne()
}
