function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome : 'Silva'
    }
}

console.log(criarPessoa())

const desc = 0.1

function criarProduto(prod, preco){
    return{
        nome : prod,
        preco : preco
        }
    }


console.log(criarProduto('batata', 234))