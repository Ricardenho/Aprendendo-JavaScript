const sequence = { 
    _id : 1,
    get id(){ return this._id++}
}

const produtos = {}

function salvarProdutos (produto){
    if (!produto._id) { produto._id = sequence.id } /*se produto não tiver id coloca a id atravez da função sequence*/
    produtos[produto._id] = produto // produtos na posição do id do produto = produto cadastrado
    return produto
}

function getProduto(id){
    return produtos[id] || 'Nenhum Produto encontrado'
}

function getTodosOsProdutos(){
    return Object.values(produtos)
}

function deleteProduct(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {
    salvarProdutos, getProduto, getTodosOsProdutos, deleteProduct
}