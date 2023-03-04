import { v4 as uuidv4 } from 'uuid';

import { MessageEntry } from "types/message"
import { toNewMessageEntry } from "utils/checks"
import store from "./store"

export const addMessage = (body: any): Promise<MessageEntry> => {
  return new Promise((resolve, reject) => {
    try {
      const newMessage = toNewMessageEntry(body)

      const fullMessage = {
        ...newMessage,
        id: uuidv4(),
        date: new Date()
      }
      store.add(fullMessage)
      return resolve(fullMessage)
    } catch (error) {
      return reject(error)
    }
  })
}

export const getMessages = (): Promise<MessageEntry[]> => {
  return new Promise((resolve) => {
    resolve(store.list())
  })
}
