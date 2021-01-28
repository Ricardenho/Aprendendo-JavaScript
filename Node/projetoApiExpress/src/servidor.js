const porta = 3003

const express = require ('express')
const BD = require('./bancoDeDados')
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(BD.getTodosOsProdutos())//converte pra json automaticamente
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(BD.getProduto(req.params.id))
       
})

app.post('/produtos', (req, res, next) => {
    const produto = BD.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:_id', (req, res, next) => {
    const produto = BD.salvarProdutos({
        _id: req.params._id,
        nome:req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next)=> {
    const produto2 = BD.deleteProduct(req.params.id)
    res.send(produto2)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})