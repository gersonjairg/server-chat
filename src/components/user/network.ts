import express from "express"

import { getUsers, addUser, deleteUser, updateUser } from "./controller"
import response from "network/response"

const router = express.Router()

// List
router.get("/", async (_req, res) => {
  try {
    const data = await getUsers()

    response.success({
      res,
      data
    })
  } catch (error) {
    response.error({
      res,
      message: "An error occurred while listing users",
      details: `${error}`
    })
  }
})

// Add
router.post("/", async (req, res) => {
  try {
    const data = await addUser(req.body)

    response.success({
      res,
      data,
      message: `User created successfully`
    })
  } catch (error) {
    response.error({
      res,
      message: "An error occurred while creating the user.",
      details: `${error}`
    })
  }
})

// Update
router.patch("/:id", async (req, res) => {
  try {
    const data = await updateUser(req.params.id, req.body)

    response.success({
      res,
      data,
      message: `User updated successfully`
    })
  } catch (error) {
    response.error({
      res,
      message: "An error occurred while updating the user",
      details: `${error}`
    })
  }
})

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const data = await deleteUser(req.params.id)

    response.success({
      res,
      data,
      message: `User deleted successfully`
    })
  } catch (error) {
    response.error({
      res,
      message: "An error occurred while deleting the user",
      details: `${error}`
    })
  }
})

export default router
