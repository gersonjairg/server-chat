import { Schema, model, Types } from "mongoose"

import { MessageType } from "types/message"

const messageSchema = new Schema<MessageType>({
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

const Message = model<MessageType>("Message", messageSchema)

export default Message
