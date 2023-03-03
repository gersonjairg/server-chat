export interface MessageEntry {
  id: string | number
  user: string
  content: string
  date: Date
}

export type NewMessageEntry = Pick<MessageEntry, 'user' | 'content'>
