import { injectable } from "tsyringe"
import { BaseRepository } from "./base.repository"
import { ProdutoDocument, ProdutoModel } from "../schemas/produto.schema"

@injectable()
export class ProdutosRepository extends BaseRepository<ProdutoDocument> {

  constructor() {

    super(ProdutoModel)

  }

}