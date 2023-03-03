import { Request as RequestExpress, Response as ResponseExpress } from "express"

interface ResponseProps {
  req?: RequestExpress
  res: ResponseExpress
  message?: string
  status?: number
  details?: string
  data?: any
}

interface Response {
  error?: string | null
  data?: any | null
  message?: string
}

export const success = ({
  res,
  message = "Success",
  status = 200,
  data
}: ResponseProps) => {
  res.status(status).send({
    message,
    data
  } as Response)
}

export const error = ({
  res,
  message = "Error",
  status = 500,
  details
}: ResponseProps) => {
  if (details) console.log(`[response error] ${details}`)
  res.status(status).send({
    error: message
  } as Response)
}

export default {
  success,
  error
}
