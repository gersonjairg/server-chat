import { Schema, model, Types } from "mongoose"

import { MessageEntry } from "types/message"

const messageSchema = new Schema<MessageEntry>({
  user: {
    type: Types.ObjectId,
    ref: "User"
  },
  content: {
    type: String,
    required: true
  },
  date: Date
})

const Message = model<MessageEntry>("Message", messageSchema)

export default Message
