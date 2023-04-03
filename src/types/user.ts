export interface UserType {
  name?: string
}

export type NewUserEntry = Pick<UserType, "name">
