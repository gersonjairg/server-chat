import express from "express"

const app = express()
const PORT = 3000

app.use("/", (_req, res) => {
  res.send("Running...")
})

app.listen(PORT)
console.log(`Server running in PORT: ${PORT}`)
