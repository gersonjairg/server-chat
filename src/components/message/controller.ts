import store from "./store"
import { MessageEntry, NewMessageEntry } from "types/message"

export const addMessage = async (
  message: NewMessageEntry
): Promise<MessageEntry> => {
  const fullMessage = {
    ...message,
    date: new Date()
  }

  return store.add(fullMessage)
}

export const getMessages = async (): Promise<MessageEntry[]> => store.list()
