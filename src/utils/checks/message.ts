import { NewMessageEntry } from "types/message"
import { isString } from "."

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

export const toNewMessageModification = (object: any): NewMessageEntry => {
  const newModification: NewMessageEntry = {
    user: object.user && parseUser(object.user),
    content: object.content && parseContent(object.content)
  }
  return newModification
}
