import mongoose from "mongoose"
import { logger } from "../config/logger"

export async function connectDatabase(): Promise<void> {

    console.log("URI:", process.env.MONGO_URI)

    const uri = process.env.MONGO_URI

    if (!uri) {
        throw new Error("MONGO_URI não definida no .env")
    }

    try {

        await mongoose.connect(uri)

        console.log("Mongo conectado")

        logger.info("MongoDB conectado com sucesso")

    } catch (error) {

        logger.error("Erro ao conectar no MongoDB", error)

        process.exit(1)

    }

}