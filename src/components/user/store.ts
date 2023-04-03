import { Types } from "mongoose"
import { UserEntry } from "types/user"
import UserModel from "./model"

export const list = async (): Promise<UserEntry[]> => {
  return UserModel.find()
}

export const add = async (user: UserEntry): Promise<UserEntry> => {
  const newUser = new UserModel(user)
  return newUser.save()
}

export const remove = async (id: string): Promise<UserEntry> => {
  const searchId = new Types.ObjectId(id)

  const userFound = await UserModel.findById(searchId)
  if (!userFound) {
    throw new Error("No user found related to the provided id")
  }

  return userFound.deleteOne()
}
