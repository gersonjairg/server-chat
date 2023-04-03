export interface MessageType {
  user?: string
  content?: string
  date?: Date
}

export type NewMessageEntry = Pick<MessageType, "user" | "content">
