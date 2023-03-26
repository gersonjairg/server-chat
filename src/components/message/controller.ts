import * as store from "./store"
import { MessageEntry } from "types/message"
import { toNewMessageEntry, toNewMessageModification } from "utils/checks"

export const addMessage = async (body: unknown): Promise<MessageEntry> => {
  const inputMessage = toNewMessageEntry(body)

  const fullMessage = {
    ...inputMessage,
    date: new Date()
  }

  return store.add(fullMessage)
}

export const getMessages = async (
  userFilter: string | null
): Promise<MessageEntry[]> => store.list(userFilter)

export const updateMessage = async (
  id: string,
  body: unknown
): Promise<MessageEntry> => {
  const message = toNewMessageModification(body)
  console.log("message: ", message)

  return store.update(id, message)
}
