import { NewMessageEntry } from "types/message"

const isString = (string: string): boolean => typeof string === "string"

const parseUser = (userFromRequest: any): string => {
  if (!isString(userFromRequest)) {
    throw new Error("Incorrect or missing user.")
  }
  return userFromRequest
}

const parseContent = (contentFromRequest: any): string => {
  if (!isString(contentFromRequest)) {
    throw new Error("Incorrect or missing content.")
  }
  return contentFromRequest
}

export const toNewMessageEntry = (object: any): NewMessageEntry => {
  const newEntry: NewMessageEntry = {
    user: parseUser(object.user),
    content: parseContent(object.content)
  }
  return newEntry
}
