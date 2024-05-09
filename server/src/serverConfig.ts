import { loadEnvironment } from "./config/environment"

import testRouter from "./routes/testRoute"

loadEnvironment()

import { json, urlencoded } from "body-parser"
import express, { type Express } from "express"
import cors from "cors"
import { Request, Response, NextFunction } from "express"
import cookieParser from "cookie-parser"

import { ErrRes } from "./types/error"
import { connectToDB } from "./config/database"

// Connect to MongoDb
connectToDB()

// Server start function
export const createServer = (): Express => {
  const app = express()

  // Middleware
  app
    .disable("x-powered-by")
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cookieParser())
    .use(
      cors({
        credentials: true,
        origin: ["http://localhost:8081"]
      })
    )

  app.use("/api/test", testRouter)

  // Error handling
  app.use((err: ErrRes, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal server error"

    return res.status(statusCode).json({
      success: false,
      message
    })
  })

  return app
}
