const nums = [1, 2, 3, 4, 5]

// for com propósito
let resultado = nums.map(function(e){
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

const carrinho = [
    '{"nome": "Borracha", "preco" : 3.45}',
    '{"nome": "Caderno", "preco" : 13.90}',
    '{"nome": "Kit de Lapis", "preco" : 41.22}',
    '{"nome": "Caneta", "preco" : 7.50}',
]

//retorna um array aprenas com os preços
const paraObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)

