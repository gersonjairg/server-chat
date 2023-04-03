import MessageModel from "./model"
import { MessageEntry, NewMessageEntry } from "types/message"
import { Types } from "mongoose"

export const list = async (
  userFilter: string | null
): Promise<MessageEntry[]> => {
  let filter = {}

  if (userFilter) {
    filter = {
      user: new RegExp(`^${userFilter}$`, "i")
    }
  }

  return MessageModel.find(filter).populate("user").exec()
}

export const add = async (message: MessageEntry): Promise<MessageEntry> => {
  const newMessage = new MessageModel(message)
  return newMessage.save()
}

export const update = async (
  id: string,
  message: NewMessageEntry
): Promise<MessageEntry> => {
  const searchId = new Types.ObjectId(id)
  const { user, content } = message

  const messageFound = await MessageModel.findById(searchId)
  if (!messageFound) {
    throw new Error("No message found related to the provided id")
  }

  messageFound.content = content !== undefined ? content : messageFound.content
  messageFound.user = user !== undefined ? user : messageFound.user

  messageFound.date = new Date()

  return messageFound.save()
}

export const remove = async (id: string): Promise<MessageEntry> => {
  const searchId = new Types.ObjectId(id)

  const messageFound = await MessageModel.findById(searchId)
  if (!messageFound) {
    throw new Error("No message found related to the provided id")
  }

  return messageFound.deleteOne()
}
