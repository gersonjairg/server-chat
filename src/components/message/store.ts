import MessageModel from "./model"
import { MessageEntry } from "types/message"

const addMessage = async (message: MessageEntry) => {
  const newMessage = new MessageModel(message)
  return newMessage.save()
}

const getMessages = async () => MessageModel.find()

export default {
  add: addMessage,
  list: getMessages
}

// export const getMessage = () => {}
// export const updateMessage = () => {}
// export const deleteMessage = () => {}
