import { Request as RequestExpress, Response as ResponseExpress } from "express"

interface ResponseProps {
  req?: RequestExpress
  res: ResponseExpress
  message?: string
  status?: number
  details?: string
}

interface Response {
  error?: string | null
  data?: string | null
}

export const success = ({
  res,
  message = "Success",
  status = 200
}: ResponseProps) => {
  res.status(status).send({
    data: message
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
