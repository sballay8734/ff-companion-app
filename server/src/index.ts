import { createServer } from "./serverConfig"

const port = process.env.PORT || 5001
const server = createServer()

server.listen(port, () => {
  console.log(`Api running on port ${port}`)
})
