import { NewUserEntry } from "types/user"
import { isString } from "."

const parseName = (userFromRequest: any): string => {
  if (!isString(userFromRequest)) {
    throw new Error("Incorrect or missing name.")
  }
  return userFromRequest
}

export const toNewUserEntry = (object: any): NewUserEntry => {
  const newEntry: NewUserEntry = {
    name: parseName(object.name)
  }
  return newEntry
}

export const toNewUserModification = (object: any): NewUserEntry => {
  const newModification: NewUserEntry = {
    name: object.name && parseName(object.name)
  }
  return newModification
}
