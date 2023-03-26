import mongoose from "mongoose"
mongoose.Promise = global.Promise

export const connectDatabase = async () => {
  try {
    // mongodb+srv://{DB_USER}:{DB_PASSWORD}@{DB_CLUSTER}.6ner1ul.mongodb.net/{DB_NAME}?retryWrites=true&w=majority
    const uri =
      "mongodb+srv://admin:bcfGFXTLpZfnxb3n@node-chat.6ner1ul.mongodb.net/db_chat?retryWrites=true&w=majority"
    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error(`Error connecting to database: ${error}`)
  }
}
