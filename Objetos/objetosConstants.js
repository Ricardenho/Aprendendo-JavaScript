//pessoa -> 123 -> {...}
//A constante pessoa aponta pro endereço de memória 123 que contem os atributos do objeto
//Eu posso mudar os atributos não o endereço de memoria

const pessoa = {nome : 'João'}
pessoa.nome = "Pedro"
console.log(pessoa)

//pessoa = {nome = 'Ana'} Erro, estou tentando dar um novo endereço de mémoria pra constante

let pessoa2 = {nome : 'Augusto'}
pessoa2 = { nome : 'Ana'}
console.log(pessoa2)

Object.freeze(pessoa)
pessoa.nome = 'MARIA'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)