import express from "express"

import { addMessage, getMessages, updateMessage } from "./controller"
import response from "network/response"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const filterUser = (req.query.user as string) || null

    const data = await getMessages(filterUser)

    response.success({
      res,
      data
    })
  } catch (error) {
    response.error({
      res,
      message: "An error occurred while listing messages",
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
      message: `Message created successfully`
    })
  } catch (error) {
    response.error({
      res,
      message: "An error occurred while creating the message.",
      details: `${error}`
    })
  }
})

router.patch("/:id", async (req, res) => {
  try {
    const data = await updateMessage(req.params.id, req.body)

    response.success({
      res,
      data,
      message: `Message updated successfully`
    })
  } catch (error) {
    response.error({
      res,
      message: "An error occurred while updating the message",
      details: `${error}`
    })
  }
})

export default router
