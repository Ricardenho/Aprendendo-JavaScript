const Pessoa = {
    nome : 'Ana',
    idade: 5,
    endereco : {
        logradouro : "Rua ABC",
        numero : 1000
    }
}


const { nome, idade } = Pessoa
console.log(nome, idade)

const { nome : n, idade : i} = Pessoa
console.log(n, i)

const { Sobrenome, bemHumorada = true } = Pessoa
console.log(Sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = Pessoa
console.log(logradouro, numero, cep)

const { conta: {ag , num} } = Pessoa
console.log(ag, num)