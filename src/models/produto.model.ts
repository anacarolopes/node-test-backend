import { ObjectId } from "mongoose"
import { States } from "../enums/states.enum"

export interface Address {
    street: string
    number: number
    state: States
}

export interface Produto {
    id: ObjectId
    name: string
    price: number
    description?: string
    address: Address
}