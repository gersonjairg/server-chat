import { MessageEntry } from "types/message"
import { toNewMessageEntry } from "utils/checks"

export const addMessage = (body: any): Promise<MessageEntry> => {
  return new Promise((resolve, reject) => {
    try {
      const newMessage = toNewMessageEntry(body)

      const fullMessage = {
        ...newMessage,
        id: 1,
        date: new Date()
      }
      return resolve(fullMessage)
    } catch (error) {
      return reject(error)
    }
  })
}
