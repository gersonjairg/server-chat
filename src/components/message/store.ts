import { MessageEntry } from "types/message"

const list: MessageEntry[] = []

const addMessage = (message: MessageEntry) => {
  list.push(message)
}

const getMessages = () => list

export default {
  add: addMessage,
  list: getMessages
}

// export const getMessage = () => {}
// export const updateMessage = () => {}
// export const deleteMessage = () => {}