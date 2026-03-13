import { Request, Response } from "express"
import { container } from "tsyringe"
import { ProdutosService } from "../services/produtos.service"

export class ProdutosController {

  static async listar(req: Request, res: Response) {
    try {
      const service = container.resolve(ProdutosService)
      const produtos = await service.listar()
      return res.json(produtos)
    } catch (error) {
      console.error("Erro ao listar produtos", error)
      return res.status(500).json({ message: "Erro interno" })
    }
  }

  static async criar(req: Request, res: Response) {
    try {
      const service = container.resolve(ProdutosService)
      const produto = await service.criar(req.body)
      return res.status(201).json(produto)
    } catch (error) {
      console.error("Erro ao criar produto", error)
      return res.status(500).json({ message: "Erro interno" })
    }
  }

}