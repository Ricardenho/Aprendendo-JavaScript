/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function simboloMais(num){
    let str = ''
    while (num != 0){
        str = str + '+'
        num--
    }
    return str
}

console.log(simboloMais(2))
console.log(simboloMais(4))