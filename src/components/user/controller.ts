import * as store from "./store"
import { UserEntry } from "types/user"
import { toNewUserEntry, toNewUserModification } from "utils/checks/user"

export const getUsers = async (): Promise<UserEntry[]> => store.list()

export const addUser = async (body: unknown): Promise<UserEntry> => {
  const inputUser = toNewUserEntry(body)
  return store.add(inputUser)
}

export const updateUser = async (
  id: string,
  body: unknown
): Promise<UserEntry> => {
  const user = toNewUserModification(body)

  return store.update(id, user)
}

export const deleteUser = async (id: string): Promise<UserEntry> =>
  store.remove(id)
