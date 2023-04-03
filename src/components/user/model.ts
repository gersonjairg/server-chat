import { Schema, model } from "mongoose"

import { UserType } from "types/user"

const userSchema = new Schema<UserType>({
  name: {
    type: String,
    required: true
  }
})

const User = model<UserType>("User", userSchema)

export default User
