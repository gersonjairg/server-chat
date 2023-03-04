import express from "express"

import response from "network/response"
import { addMessage, getMessages } from "./controller"

const router = express.Router()

router.get("/", async (_, res) => {
  try {
    const data = await getMessages()

    response.success({
      res,
      data
    })
  } catch (error) {
    response.error({
      res,
      message: "Ha ocurrido un error al listar los mensajes.",
      details: `${error}`
    })
  }
})

router.post("/", async (req, res) => {
  try {
    const data = await addMessage(req.body)

    response.success({
      res,
      data,
      message: `Mensaje creado correctamente!`
    })
  } catch (error) {
    response.error({
      res,
      message: "Ha ocurrido un error al crear el mensaje.",
      details: `${error}`
    })
  }
})

export default router
