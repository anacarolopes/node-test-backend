import express from 'express'

const app = express()

app.get('/produtos', (req, res) =>{
    return res.send('Meus Produtos')
})

app.listen(3000, () => {
    console.log('Servidor rodando')
})