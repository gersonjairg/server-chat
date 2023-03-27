import express from "express"

import {
  addMessage,
  deleteMessage,
  getMessages,
  updateMessage
} from "./controller"
import response from "network/response"

const router = express.Router()

// List
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

// Add
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

// Update
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

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const data = await deleteMessage(req.params.id)

    response.success({
      res,
      data,
      message: `Message deleted successfully`
    })
  } catch (error) {
    response.error({
      res,
      message: "An error occurred while deleting the message",
      details: `${error}`
    })
  }
})

export default router
