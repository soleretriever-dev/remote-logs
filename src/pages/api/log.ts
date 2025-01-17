import { url } from "config"
import { logger, withLogger } from "lib/pino-server"
import { NextApiRequest, NextApiResponse } from "next"

/**
 * Special api route for logging important events in the browser
 */
const handler = async function logFromFrontend(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", url)
  res.setHeader("Access-Control-Allow-Credentials", "true")

  res.setHeader("Access-Control-Allow-Headers", "content-type")

  if (req.method === "OPTIONS") {
    res.end()

    return
  }
  try {
    const { level, data, ctx } = req.body

    //@ts-expect-error - index type mismatch
    let fn = (logger[level] || logger.info).bind(logger)

    if (level && data) {
      fn({
        ctx,
        data,
        browser: true, // mark the log as comming from the browser
      })
    }
    console.log({level, data, ctx})
    res.status(204).end()
  } catch (e) {
    res.status(500).end()
  }
}

export default withLogger(handler)
