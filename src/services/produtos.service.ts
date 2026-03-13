import { inject, injectable } from "tsyringe"
import { ProdutosRepository } from "../repositories/produtos.repository"
import { ProdutoDocument } from "../schemas/produto.schema"

@injectable()
export class ProdutosService {

  constructor(
    @inject(ProdutosRepository)
    private produtosRepository: ProdutosRepository
  ) {}

  async listar(): Promise<ProdutoDocument[]> {

    return this.produtosRepository.findAll()

  }

  async criar(data: ProdutoDocument): Promise<ProdutoDocument> {

    return this.produtosRepository.create(data)

  }

}