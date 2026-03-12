import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(cors({
     origin: "https://potential-space-zebra-7r45xg5vj95cgw4-5173.app.github.dev"
}))

enum States {
    MG = "Minas Gerais",
    SP = "São Paulo"
}

interface IAddress{
    street: string;
    number: number;
    state: States
}

interface IProdutos {
    id: number;
    name: string;
    price: number;
    description?: string;
    address: IAddress;
}

let produtos: IProdutos[] = []

app.get('/produtos', (req: Request, res: Response) => {

    const newProduto: IProdutos = {
        id: Math.random(),
        name: "Batedeira",
        price: 300,
        description: "Batedeira muito boa!",
        address: {
            street: "Rua dos Bobos",
            number: 20,
            state: States.MG
        }

    }
    produtos.push(newProduto)

    return res.json(produtos)
})

app.listen(3000, () => {
    console.log('Servidor rodando')
})