import dotenv from "dotenv"

export function loadEnvironment() {
  const envFile = process.env.NODE_ENV === "prod" ? ".env.prod" : ".env.dev"
  dotenv.config({ path: envFile })
}
