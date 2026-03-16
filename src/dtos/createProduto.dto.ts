import { States } from "../enums/states.enum"

export interface CreateProdutoDTO {
    name: string
    price: number
    description: string
    address: {
        street: string
        number: number
        state: States
    }
}