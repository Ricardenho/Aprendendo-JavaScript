const pessoa = {
    nome : 'Carlos', idade : 23, peso : 13 
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable : true, //a chave é vizível
    Writable : false, //ele não pode ser alterado
    value : '01/01/2019'
})

pessoa.dataNascimento = '01/01/2077'

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)