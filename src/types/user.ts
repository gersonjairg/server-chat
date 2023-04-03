export interface UserEntry {
  name?: string
}

export type NewUserEntry = Pick<UserEntry, "name">
