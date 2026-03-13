import express from "express"
import produtosRoutes from "./routes/produtos.routes"
import { corsConfig } from "./config/cors"
import { loggerMiddleware } from "./middlewares/logger.middleware"

const app = express()

app.use(express.json())
app.use(corsConfig)
app.use(loggerMiddleware)

app.use("/produtos", produtosRoutes)

export default app