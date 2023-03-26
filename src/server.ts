import express from "express"
import { connectDatabase } from "./config/database"
import router from "network/routes"

const PORT = 3000
const app = express()
connectDatabase()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
router(app)

app.listen(PORT)
console.log(`Server running in PORT: ${PORT}`)
