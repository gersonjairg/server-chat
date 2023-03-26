import { Schema, model } from "mongoose"

import { MessageEntry } from "types/message"

const messageSchema = new Schema<MessageEntry>({
  user: String,
  content: {
    type: String,
    required: true
  },
  date: Date
})

const Message = model<MessageEntry>("Message", messageSchema)

export default Message
