import * as store from "./store"
import { MessageType } from "types/message"
import {
  toNewMessageEntry,
  toNewMessageModification
} from "utils/checks/message"

export const getMessages = async (
  userFilter: string | null
): Promise<MessageType[]> => store.list(userFilter)

export const addMessage = async (body: unknown): Promise<MessageType> => {
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
): Promise<MessageType> => {
  const message = toNewMessageModification(body)

  return store.update(id, message)
}

export const deleteMessage = async (id: string): Promise<MessageType> =>
  store.remove(id)
