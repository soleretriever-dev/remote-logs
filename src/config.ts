import { LevelsByName } from "tinga"

export const url =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? "https://sr-remote-logs.vercel.app"
    : "http://localhost:3000"

export const remoteLogUrl = `${url}/api/log`

export const browserLogLevel = (process.env.NEXT_PUBLIC_BROWSER_LOG_LEVEL ||
  "silent") as LevelsByName

export const browserRemoteLogLevel = (process.env
  .NEXT_PUBLIC_BROWSER_REMOTE_LOG_LEVEL || "trace") as LevelsByName

export const serverLogLevel = (process.env.SERVER_LOG_LEVEL ||
  "trace") as LevelsByName

export const loggerContext = { name: "Ivan", isDemo: true }

export const loggerText = "Lorem ipsum"
