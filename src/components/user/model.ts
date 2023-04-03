import { Schema, model } from "mongoose"

import { UserEntry } from "types/user"

const userSchema = new Schema<UserEntry>({
  name: {
    type: String,
    required: true
  }
})

const User = model<UserEntry>("User", userSchema)

export default User
