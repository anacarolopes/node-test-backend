import "reflect-metadata"
import "dotenv/config"

import app from "../app"
import { connectDatabase } from "../database/mongo"
import { logger } from "../config/logger"

async function start() {

  try {

    await connectDatabase()

    const port = Number(process.env.PORT) || 3000

    app.listen(port, () => {

      logger.info(`Servidor rodando na porta ${port}`)

    })

  } catch (error) {

    logger.error("Erro ao iniciar aplicação", error)
    process.exit(1)

  }

}

start()