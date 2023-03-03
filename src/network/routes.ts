import { Express } from "express"
import message from "components/message/network"

const router = (server: Express) => {
  server.use("/message", message)
}

export default router
