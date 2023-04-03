import * as store from "./store"
import { UserType } from "types/user"
import { toNewUserEntry, toNewUserModification } from "utils/checks/user"

export const getUsers = async (): Promise<UserType[]> => store.list()

export const addUser = async (body: unknown): Promise<UserType> => {
  const inputUser = toNewUserEntry(body)
  return store.add(inputUser)
}

export const updateUser = async (
  id: string,
  body: unknown
): Promise<UserType> => {
  const user = toNewUserModification(body)

  return store.update(id, user)
}

export const deleteUser = async (id: string): Promise<UserType> =>
  store.remove(id)
