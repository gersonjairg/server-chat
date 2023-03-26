import db from "mongoose"

import MessageModel from "./model"
import { MessageEntry } from "types/message"

db.Promise = global.Promise

// mongodb+srv://{DB_USER}:{DB_PASSWORD}@{DB_CLUSTER}.6ner1ul.mongodb.net/{DB_NAME}?retryWrites=true&w=majority
db.connect(
  "mongodb+srv://admin:bcfGFXTLpZfnxb3n@node-chat.6ner1ul.mongodb.net/db_chat?retryWrites=true&w=majority"
)
  .then(() => console.log("[db] Conectada con éxito"))
  .catch((err) => console.error("[db]", err))

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
