import mongoose from "mongoose"
mongoose.Promise = global.Promise

const { DB_USER, DB_PASSWORD, DB_CLUSTER, DB_NAME } = process.env

export const connectDatabase = async () => {
  try {
    const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.6ner1ul.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    await mongoose.connect(uri)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error(`Error connecting to database: ${error}`)
  }
}
