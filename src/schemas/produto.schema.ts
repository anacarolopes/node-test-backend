import { Schema, model } from "mongoose"

export interface ProdutoDocument {
  name: string,
  price: number,
  description?: string,
  address?: {
    street: string
    number: number
    state: string
  }
}

const ProdutoSchema = new Schema<ProdutoDocument>({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  description: {
    type: String
  },

  address: {
    street: String,
    number: Number,
    state: String
  }
})

export const ProdutoModel = model<ProdutoDocument>(
  "Produto",
  ProdutoSchema,
  "tb_produtos"
)