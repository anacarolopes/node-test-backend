import { Router } from "express"
import { ProdutosController } from "../controllers/produtos.controller"

const router = Router()

router.get("/", ProdutosController.listar)
//router.post("/produtos", ProdutosController.criar)

export default router