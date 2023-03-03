import express from "express"
import response from "./network/response"

const PORT = 3000

const router = express.Router()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

router.get("/", (_req, res) => {
  try {
    response.success({ res, message: "Todo correcto", status: 201 })
  } catch (error) {
    response.error({
      res,
      message: "Error inesperado",
      details: "Es solo una simulación de los errores.",
      status: 404
    })
  }
})

app.listen(PORT)
console.log(`Server running in PORT: ${PORT}`)
