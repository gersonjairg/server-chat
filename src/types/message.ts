export interface MessageEntry {
  user: string
  content: string
  date: Date
}

export type NewMessageEntry = Pick<MessageEntry, 'user' | 'content'>
