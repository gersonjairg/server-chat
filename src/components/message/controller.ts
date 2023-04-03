import * as store from "./store"
import { MessageEntry } from "types/message"
import {
  toNewMessageEntry,
  toNewMessageModification
} from "utils/checks/message"

export const getMessages = async (
  userFilter: string | null
): Promise<MessageEntry[]> => store.list(userFilter)

export const addMessage = async (body: unknown): Promise<MessageEntry> => {
  const inputMessage = toNewMessageEntry(body)

  const fullMessage = {
    ...inputMessage,
    date: new Date()
  }

  return store.add(fullMessage)
}

export const updateMessage = async (
  id: string,
  body: unknown
): Promise<MessageEntry> => {
  const message = toNewMessageModification(body)

  return store.update(id, message)
}

export const deleteMessage = async (id: string): Promise<MessageEntry> =>
  store.remove(id)
